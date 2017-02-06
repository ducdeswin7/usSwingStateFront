import d3 from 'd3';
import topojson from 'topojson';
import Datamap from 'datamaps/dist/datamaps.usa.min'
import React from 'react';
import ReactDOM from 'react-dom';
import statesDefaults from '../../data/states-defaults';
import objectAssign from 'object-assign';
import SkyLight from 'react-skylight';

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
                data: []
            }
        }
    }

    linearPalleteScale(value){
        const dataValues = this.props.regionData.map(function(data) { return data.value });
        const minVal = Math.min(...dataValues);
        const maxVal = Math.max(...dataValues);

        // those state color
        return d3.scale.linear().domain([minVal, maxVal]).range(["#CC4731","#02386F"])(value);
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
                'Republican': '#CC4731',
                'Democrat': '#306596',
                'Heavy Democrat': '#306596',
                'Light Democrat': '#306596',
                'Heavy Republican': '#CC4731',
                'Light Republican': '#CC4731',
                defaultFill: 'yellow'
            },
            geographyConfig: {
                borderWidth: 0.5,
                highlightFillColor: 'yellow',
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

                    // alert(geography.properties.name);

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
                    <div className="state-data">
                        <div className="state-data_header">
                            <h1 className="state-data_header_title">{this.state.currentState.name}</h1>
                        </div>
                    </div>
                </SkyLight>
            </div>
        );
    }
}

DataMap.propTypes = {
    regionData: React.PropTypes.array.isRequired
};
