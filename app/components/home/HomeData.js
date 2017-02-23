import React from 'react';
let _ = require('lodash');

import Candidats from '../candidats/Candidats';
import Winners from '../winners/Winners';
import {getStateInfos, getElectionCandidat} from '../../utils/ApiHelpers';

class HomeData extends React.Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentDidMount() {
        getElectionCandidat("2016").then((resp) => {
            this.setState({
                candidates: resp.candidates[0].candidates
            })
        })
    }

    render() {
        return (
            <div className="home_informations">
                <div className="home_candidats">
                    <div className="home_candidats_title">Biographies</div>
                    <Candidats candidates={this.state.candidates} />
                </div>

                {/*{Object.getOwnPropertyNames(this.props.state).length > 0 ?*/}
                    <div className="home_data">
                        <h2 className="home_data_state">{this.props.state.name}</h2>
                        <div className="home_data_info">
                            <span className="home_data_info_percent">88%</span>
                            <span className="home_data_info_text">White afro-americain</span>
                        </div>
                        <div className="home_data_info">
                            <span className="home_data_info_percent">88%</span>
                            <span className="home_data_info_text">White afro-americain</span>
                        </div>
                        <div className="home_data_info">
                            <span className="home_data_info_percent">88%</span>
                            <span className="home_data_info_text">White afro-americain</span>
                        </div>
                    </div>
                    {/*: <div></div>*/}
                {/*}*/}

                <div className="home_period">
                    <Winners winners={this.props.winners} />
                </div>
            </div>
        )
    }
}

export default HomeData;