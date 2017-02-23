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

    componentWillReceiveProps(nextProps) {
        this.setState({
            winners: nextProps.winners
        })
    }

    createListWinners() {
        if (this.props.winners) {
            return this.state.winners.map((winner, i) => {

                let active = {
                    border: '4px solid ' + winner.candidate.party.party_color
                };

                return (
                    <div className="winners_block" key={i}>
                        <h3 className="winners_block_year">{winner.year}</h3>

                        <div className="president">
                            <img src={'http://unitedswingstates.com/uploads/candidates/' + winner.candidate.path} style={active} className="president_img" alt="president image"/>
                        </div>
                    </div>
                )}
            )
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

                {this.createListWinners()}
                <div className="winners_timeline"></div>
            </div>
        )
    }
}

export default Winners;