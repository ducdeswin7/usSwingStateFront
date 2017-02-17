import React from 'react';

import Candidats from '../candidats/Candidats';
import Winners from '../winners/Winners';

class HomeData extends React.Component {
    render() {
        return (
            <div className="home_informations">
                <div className="home_candidats">
                    <div className="home_candidats_title">Biographies</div>
                    <Candidats candidats={this.props.candidats} />
                </div>

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

                <div className="home_period">
                    <Winners />
                </div>
            </div>
        )
    }
}

export default HomeData;