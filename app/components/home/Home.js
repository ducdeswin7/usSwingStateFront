import React from 'react';
import { connect } from 'react-redux'

import SkyLight from 'react-skylight';

require('./home.scss');

import getInfos from '../../utils/ApiHelpers';

import DataMap from '../dataMaps/DataMap';

import ProgressBar from '../progressBar/ProgressBar';
import Candidats from '../candidats/Candidats';
import Winners from '../winners/Winners';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentState: {},
            candidats: {}
        }
    }

    componentDidMount() {
        getInfos()
            .then(function (data) {

                console.log('data', data);
                this.setState({
                    currentState: data.currentState,
                    candidats: data.candidats
                })
            }.bind(this))
    }

    render() {
        return (
            <div className="home">
                <div className="home_header">
                    <h1 className="home_header_title">Grands electeurs</h1>
                    <ProgressBar showDetails="true"/>
                </div>

                <DataMap regionData={this.props.regionData} />

                <div className="home_candidats">
                    <div className="home_candidats_title">Biographies</div>
                    <Candidats candidats={this.state.candidats} />
                </div>

                <div className="home_period">
                    <Winners />
                </div>
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