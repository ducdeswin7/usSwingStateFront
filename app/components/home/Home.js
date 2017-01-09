import React from 'react';
import { connect } from 'react-redux'

import SkyLight from 'react-skylight';

require('./home.scss');

import DataMap from '../dataMaps/DataMap';

import ProgressBar from '../progressBar/ProgressBar';
import Candidats from '../candidats/Candidats';

class Home extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
console.log(this.props)
        return (
            <div className="home">
                <div className="home_header">
                    <h1 className="home_header_title">Grands electeurs</h1>
                    <ProgressBar />
                </div>

                <DataMap regionData={this.props.regionData} />
                <div className="home_candidats">
                    <div className="home_candidats_title">Biographies</div>
                    <Candidats />
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