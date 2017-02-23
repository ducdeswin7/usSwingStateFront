import React from 'react';
import { connect } from 'react-redux'

import SkyLight from 'react-skylight';
import {getElectionResult} from '../../utils/ApiHelpers';

require('./home.scss');
let _ = require('lodash');

import getInfos from '../../utils/ApiHelpers';

import DataMap from '../dataMaps/DataMap';

import ProgressBar from '../progressBar/ProgressBar';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedState: {},
            candidats: {},
            results: {}
        }
    }

    componentDidMount() {
        getElectionResult(2016)
            .then((resp) => {
                let results = resp.results;
                let republican = _.find(results, (obj) => { return obj.party.party_name == 'republican'});
                let democrat = _.find(results, (obj) => { return obj.party.party_name == 'democrat'});

                this.setState({
                    results: {
                        republican,
                        democrat
                    }
                })
            })
    }

    renderHome() {
        return (
            <div className="home_header">
                <h1 className="home_header_title">Grands electeurs</h1>
                <ProgressBar democrat={this.state.results.democrat} republican={this.state.results.republican}/>
            </div>
        )
    }

    render() {
        if (this.state.results.republican) {
            this.renderHome()
        }

        return (
            <div className="home">
                {/*<div className="home_search">*/}
                {/*<i className="material-icons">search</i>*/}
                {/*</div>*/}
                {this.renderHome()}

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