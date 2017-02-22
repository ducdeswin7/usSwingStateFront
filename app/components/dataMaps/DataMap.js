import d3 from 'd3';
import Datamap from 'datamaps/dist/datamaps.usa.min'
import React from 'react';
import ReactDOM from 'react-dom';
import statesDefaults from '../../data/states-defaults';
import objectAssign from 'object-assign';
import SkyLight from 'react-skylight';
import StateData from './stateData/StateData';
import styles from './skylightStyles';
import HomeData from '../home/HomeData';
import {getStateInfos} from '../../utils/ApiHelpers';
let _ = require('lodash');

require('./datamaps.scss');
require('./stateData.scss');

export default class DataMap extends React.Component {
    constructor(props){
        super(props);
        this.datamap = null;

        this.state = {
            swingStates: [
                "Colorado",
                "Florida",
                "Iowa",
                "Michigan",
                "Nevada",
                "New Hampshire",
                "North Carolina",
                "Ohio",
                "Pennsylvania",
                "Virginia",
                "Wisconsin"
            ],
            currentState: {}
        }
    }

    redducedData(){

        const newData = this.props.regionData.reduce((object, data) => {
            object[data.code] = this.state.swingStates.indexOf(data.regionName) > -1 ?
                { value: data.value, fillKey: 'SS' } : { value: data.value, fillKey: 'defaultFill' } ;
            return object;
        }, {});
        return objectAssign({}, statesDefaults, newData);
    }

    renderMap($this){

        console.log(this.redducedData());
        return new Datamap({
            element: ReactDOM.findDOMNode(this),
            scope: 'usa',
            data: this.redducedData(),
            fills: {
                'Republican': '#0e1b29',
                'Democrat': '#0e1b29',
                'SS': '#ab9966',
                'Light Democrat': '#0e1b29',
                'Heavy Republican': '#0e1b29',
                'Light Republican': '#0e1b29',
                'defaultFill': '#0e1b29'
            },
            geographyConfig: {
                borderWidth: 0.3,
                highlightFillColor: '#1c3854',
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

                    if ($this.state.swingStates.indexOf(geography.properties.name) > -1) {
                        getStateInfos("florida")
                            .then(function (data) {
                                console.log(data)
                                $this.setState({
                                    currentState: data.stateCurrent
                                })
                            }.bind(this));

                        $this.refs.simpleDialog.show();
                    }
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
                        <StateData state={ this.state.currentState }/>
                    </SkyLight>

                    <HomeData candidats={this.state.candidats} state={this.state.currentState} />
                </div>

        );
    }
}

DataMap.propTypes = {
    regionData: React.PropTypes.array.isRequired
};
