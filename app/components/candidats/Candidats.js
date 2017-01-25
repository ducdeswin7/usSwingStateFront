import React from 'react';
require('./candidat.scss');

import SkyLight from 'react-skylight';

import Candidat from './Candidat';

import styles from '../dataMaps/skylightStyles'

class Candidats extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidats: []
        }
    }

    componentWillReceiveProps(nextprops) {

        console.log('nextprops', nextprops)
        this.setState({
            candidats: this.props.candidats,
        })
    }
    render() {

        console.log('candidat', this)
        return(
            <div className="candidat-lists">

                <Candidat popin={this} />

                <SkyLight hideOnOverlayClicked
                          dialogStyles={styles.skylightDialog}
                          closeButtonStyle={styles.closeButtonStyle}
                          ref="candidatPopin" title="">
                    Hello
                </SkyLight>

                <hr className="candidat-lists_hr"/>

                <Candidat popin={this} />
            </div>
        )
    }
}

export default Candidats;