import React from 'react';
import SkyLight from 'react-skylight';
require('./candidat.scss');
require('./candidatPopin.scss');

import Candidat from './Candidat';
import CandidatProfile from './CandidatProfile';
import styles from '../dataMaps/skylightStyles'

class candidates extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidates: {
                trump: {
                    color: "#d93d29",
                    imageUrl: "http://media3.s-nbcnews.com/j/newscms/2016_20/1541946/160518-trump-portrait-jsw-145p_1c226e6636be4572928409c157f0d50a.nbcnews-ux-2880-1000.jpg"
                },
                hillary: {
                    color: '#18bdda',
                    imageUrl: "https://www.thenation.com/wp-content/uploads/2016/10/Clinton_PlannedParenthood_rtr_img.jpg"
                }
            },
            selectedCandidate: {}
        }
    }

    setSelectedCandidate(candidatData) {
        this.setState({
            selectedCandidate: candidatData
        })
    }

    selectedCandidat(candidatData) {
        this.refs.candidatPopin.show();
        this.setSelectedCandidate(candidatData)
    }

    createListCandidate() {
        if(this.props.candidates) {
            return this.props.candidates.map((candidate, i) => {

                let borderStyle = {
                    border: '4px solid ' + candidate.party.party_color
                };

                return (
                    <div className="president" key={i} onClick={() => this.selectedCandidat(candidate)}>
                        <img src={'http://unitedswingstates.com/uploads/candidates/' + candidate.path} style={borderStyle} className="president_img" alt="president image"/>
                    </div>
                )}
            )
        }
    }

    render() {
        return(
        <div className="candidat-lists">

            <SkyLight hideOnOverlayClicked
                      dialogStyles={styles.skylightDialog}
                      closeButtonStyle={styles.closeButtonStyle}
                      ref="candidatPopin" title="">
                <CandidatProfile selectedCandidate={this.state.selectedCandidate} />
            </SkyLight>

            {this.createListCandidate()}
        </div>
        )
    }
}

export default candidates;