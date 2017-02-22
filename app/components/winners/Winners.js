import React from 'react';
import Candidat from '../candidats/Candidat';
import SkyLight from 'react-skylight';

import styles from '../dataMaps/skylightStyles'

import CandidatProfile from '../candidats/CandidatProfile';
require('./winners.scss');

class Winners extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            winners: {
                trump: {
                    color: "#d93d29",
                    imageUrl: "http://media3.s-nbcnews.com/j/newscms/2016_20/1541946/160518-trump-portrait-jsw-145p_1c226e6636be4572928409c157f0d50a.nbcnews-ux-2880-1000.jpg"
                },
                obama: {
                    color: "#18bdda",
                    imageUrl: "http://i2.cdn.turner.com/cnnnext/dam/assets/170110212111-01-obama-slider-2016-super-169.jpg"
                }
            }
        }
    }

    render() {
        return(
            <div className="winners">

                <SkyLight hideOnOverlayClicked
                          dialogStyles={styles.skylightDialog}
                          closeButtonStyle={styles.closeButtonStyle}
                          ref="candidatPopin" title="candidat popin ">
                    <CandidatProfile />
                </SkyLight>

                <div className="winners_block">
                    <h3 className="winners_block_year">2016</h3>
                    <Candidat color={this.state.winners.trump.color} image={this.state.winners.trump.imageUrl} popin={this} />
                </div>
                <div className="winners_block">
                    <h3 className="winners_block_year">2012</h3>
                    <Candidat color={this.state.winners.obama.color} image={this.state.winners.obama.imageUrl} popin={this} />
                </div>
                <div className="winners_block">
                    <h3 className="winners_block_year">2008</h3>
                    <Candidat color={this.state.winners.obama.color} image={this.state.winners.obama.imageUrl} popin={this} />
                </div>
            </div>
        )
    }
}

export default Winners;