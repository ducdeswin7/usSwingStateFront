import React from 'react';
import SkyLight from 'react-skylight';
require('./candidat.scss');
require('./candidatPopin.scss');

import Candidat from './Candidat';
import CandidatProfile from './CandidatProfile';
import styles from '../dataMaps/skylightStyles'

class Candidats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidats: []
        }
    }

    componentWillReceiveProps(nextprops) {
        this.setState({
            candidats: this.props.candidats,
        })
    }
    render() {
        return(
            <div className="candidat-lists">

                <Candidat popin={this} />

                <SkyLight hideOnOverlayClicked
                          dialogStyles={styles.skylightDialog}
                          closeButtonStyle={styles.closeButtonStyle}
                          ref="candidatPopin" title="">
                    <CandidatProfile />
                </SkyLight>

                <hr className="candidat-lists_hr"/>

                <Candidat popin={this} />
            </div>
        )
    }
}

export default Candidats;