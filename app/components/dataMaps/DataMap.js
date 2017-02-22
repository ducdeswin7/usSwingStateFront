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
                "Florida",  // ok - R
                "Iowa", // ok - R
                "Michigan",
                "Nevada",
                "New Hampshire",
                "North Carolina", // ok - R
                "Ohio", // ok - R
                "Pennsylvania", // ok - R
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
        let map =  new Datamap({
            element: ReactDOM.findDOMNode(this),
            scope: 'usa',
            data: this.redducedData(),
            fills: {
                'Republican': '#d92438',
                'Democrat': '#13a1c9',
                'SS': '#0e1b29',
                'Light Democrat': '#0e1b29',
                'Heavy Republican': '#0e1b29',
                'Light Republican': '#0e1b29',
                'defaultFill': '#141a25'
            },
            geographyConfig: {
                borderWidth: 1.8,
                borderColor: '#1c3854',
                borderOpacity: .4,
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
            map.addPlugin('markers', function(layer, data, options) {
            let self = this,
                fillData = this.options.fills,
                svg = this.svg;

            if (!data || (data && !data.slice)) {
                throw "Datamaps Error - bubbles must be an array";
            }

            let bubbles = layer.selectAll('image.datamaps-markers').data(data, JSON.stringify),
                party = 'democrate';

            if( party == "democrate"){
                var partyImage = 'http://unitedswingstates.com/uploads/states/vKQyrm4eiq.png';
            }else{
                var partyImage = 'http://unitedswingstates.com/uploads/states/XhmtcVPONY.png';
            }

            bubbles.enter()
                .append('image')
                .attr('class', 'datamaps-marker')
                .attr('xlink:href', partyImage)
                .attr('height', 51)
                .attr('width', 60)
                .attr('x', function(datum) {
                    let latLng;
                    if (datumHasCoords(datum)) {
                        latLng = self.latLngToXY(datum.latitude, datum.longitude);
                    } else if (datum.centered) {
                        latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
                    }
                    if (latLng) return latLng[0];
                })
                .attr('y', function(datum) {
                    let latLng;
                    if (datumHasCoords(datum)) {
                        latLng = self.latLngToXY(datum.latitude, datum.longitude);
                    } else if (datum.centered) {
                        latLng = self.path.centroid(svg.select('path.' + datum.centered).data()[0]);
                    }
                    if (latLng) return latLng[1];
                })

                .on('mouseover', function(datum) {
                    console.log('mousover!');
                    let $this = d3.select(this);

                    if (options.popupOnHover) {
                        console.log('going', datum)
                        self.updatePopup($this, datum, options, svg);
                    }
                })
                .on('mouseout', function(datum) {
                    let $this = d3.select(this);

                    if (options.highlightOnHover) {
                        //reapply previous attributes
                        let previousAttributes = JSON.parse($this.attr('data-previousAttributes'));
                        for (let attr in previousAttributes) {
                            $this.style(attr, previousAttributes[attr]);
                        }
                    }

                    d3.selectAll('.datamaps-hoverover').style('display', 'none');
                })


            bubbles.exit()
                .transition()
                .delay(options.exitDelay)
                .attr("height", 0)
                .remove();

            function datumHasCoords(datum) {
                return typeof datum !== 'undefined' && typeof datum.latitude !== 'undefined' && typeof datum.longitude !== 'undefined';
            }

        });

        map.markers([{
            name: 'Florida',
            latitude: 30,
            longitude: -83,
        },{
            name: 'Ohio',
            latitude: 42,
            longitude: -84,
        },{
            name: 'IOWA ',
            latitude: 44,
            longitude: -95,
        },{
            name: 'Colorado',
            latitude: 40.5,
            longitude: -107.5,
        }], {
            popupOnHover: true,
            popupTemplate: function(data) {
                return "<div class='hoverinfo'>" + data.name + "</div>";
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