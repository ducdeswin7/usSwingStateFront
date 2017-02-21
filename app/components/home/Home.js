import React from 'react';
import { connect } from 'react-redux'

import SkyLight from 'react-skylight';

require('./home.scss');

import getInfos from '../../utils/ApiHelpers';

import DataMap from '../dataMaps/DataMap';

import ProgressBar from '../progressBar/ProgressBar';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedState: {},
            candidats: {}
        }
    }

    render() {
        return (
            <div className="home">
                <div className="home_search">
                    <i className="material-icons">search</i>
                </div>
                <div className="home_header">
                    <h1 className="home_header_title">Grands electeurs</h1>
                    <ProgressBar showDetails="true"/>
                </div>

                <DataMap regionData={this.props.regionData} />
            </div>
        )
    }
}


Home.propTypes = {
    regionData: React.PropTypes.array.isRequired,
};

function mapStateToProps(state) {
    return {
        regionData: state.regionData,
    }
}

export default connect(mapStateToProps)(Home);