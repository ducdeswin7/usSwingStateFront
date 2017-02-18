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
            candidats: {
                trump: {
                    color: "#d93d29",
                    imageUrl: "http://media3.s-nbcnews.com/j/newscms/2016_20/1541946/160518-trump-portrait-jsw-145p_1c226e6636be4572928409c157f0d50a.nbcnews-ux-2880-1000.jpg"
                },
                hillary: {
                    color: '#18bdda',
                    imageUrl: "https://www.thenation.com/wp-content/uploads/2016/10/Clinton_PlannedParenthood_rtr_img.jpg"
                }
            }
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

                <Candidat color={this.state.candidats.trump.color} image={this.state.candidats.trump.imageUrl} popin={this} />

                <SkyLight hideOnOverlayClicked
                          dialogStyles={styles.skylightDialog}
                          closeButtonStyle={styles.closeButtonStyle}
                          ref="candidatPopin" title="">
                    <CandidatProfile />
                </SkyLight>

                <hr className="candidat-lists_hr"/>

                <Candidat color={this.state.candidats.hillary.color} image={this.state.candidats.hillary.imageUrl} popin={this} />
            </div>
        )
    }
}

export default Candidats;