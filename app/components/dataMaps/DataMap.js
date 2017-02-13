import d3 from 'd3';
import topojson from 'topojson';
import Datamap from 'datamaps/dist/datamaps.usa.min'
import React from 'react';
import ReactDOM from 'react-dom';
import statesDefaults from '../../data/states-defaults';
import objectAssign from 'object-assign';
import SkyLight from 'react-skylight';
import StateData from './stateData/StateData';

import styles from './skylightStyles';

require('./datamaps.scss');
require('./stateData.scss');

export default class DataMap extends React.Component {
    constructor(props){
        super(props);
        this.datamap = null;

        this.state = {
            currentState: {
                name: [],
                data: {}
            }
        }
    }

    linearPalleteScale(value){
        const dataValues = this.props.regionData.map(function(data) { return data.value });
        const minVal = Math.min(...dataValues);
        const maxVal = Math.max(...dataValues);

        // those state color
        return d3.scale.linear().domain([minVal, maxVal]).range(["#0e1b29","#02386F"])(value);
    }
    redducedData(){
        const newData = this.props.regionData.reduce((object, data) => {
            object[data.code] = { value: data.value, fillColor: this.linearPalleteScale(data.value) };
            return object;
        }, {});
        return objectAssign({}, statesDefaults, newData);
    }
    renderMap($this){

        return new Datamap({
            element: ReactDOM.findDOMNode(this),
            scope: 'usa',
            data: this.redducedData(),
            fills: {
                'Republican': '#0e1b29',
                'Democrat': '#0e1b29',
                'Heavy Democrat': '#0e1b29',
                'Light Democrat': '#0e1b29',
                'Heavy Republican': '#0e1b29',
                'Light Republican': '#0e1b29',
                defaultFill: '#0e1b29'
            },
            geographyConfig: {
                borderWidth: 0.3,
                highlightFillColor: '#284f77',
                popupTemplate: function(geography, data) {

                    if (data && data.value) {
                        return '<div class="popup-maps"><strong>' + geography.properties.name + ', ' + data.value + '</strong></div>';
                    } else {
                        return '<div class="popup-maps"><strong>' + geography.properties.name + '</strong></div>';
                    }
                }
            },
            done: function(datamap) {

                datamap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {

                    $this.setState({
                        currentState: {
                            name: geography.properties.name
                        }
                    });

                    $this.refs.simpleDialog.show();
                });
            }
        });
    }
    currentScreenWidth(){
        return window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
    }
    componentDidMount(){
        const mapContainer = d3.select('#datamap-container');
        const initialScreenWidth = this.currentScreenWidth();
        const containerWidth = (initialScreenWidth < 1000) ?
            { width: initialScreenWidth + 'px',  height: (initialScreenWidth * 0.5625) + 'px' } :
            { width: '1300px', height: '450px' }

        mapContainer.style(containerWidth);
        this.datamap = this.renderMap( this );
        window.addEventListener('resize', () => {
            const currentScreenWidth = this.currentScreenWidth();
            const mapContainerWidth = mapContainer.style('width');
            if (this.currentScreenWidth() > 600 && mapContainerWidth !== '600px') {
                d3.select('svg').remove();
                mapContainer.style({
                    width: '800px',
                    height: '350px'
                });
                this.datamap = this.renderMap();
            }
            else if (this.currentScreenWidnth() <= 600) {
                d3.select('svg').remove();
                mapContainer.style({
                    width: currentScreenWidth + 'px',
                    height: (currentScreenWidth * 0.5625) + 'px'
                });
                this.datamap = this.renderMap();
            }
        });
    }
    componentDidUpdate(){
        this.datamap.updateChoropleth(this.redducedData());
    }
    componentWillUnmount(){
        d3.select('svg').remove();
    }
    render() {

        let styleMap = {
            margin: '0px auto',
            paddingTop: '10rem',
        };

        return (
            <div id="datamap-container" style={styleMap}>
                <SkyLight hideOnOverlayClicked dialogStyles={styles.skylightDialog} ref="simpleDialog" title="  ">
                    <StateData state={ this.state.currentState.name }/>
                </SkyLight>
            </div>
        );
    }
}

DataMap.propTypes = {
    regionData: React.PropTypes.array.isRequired
};
