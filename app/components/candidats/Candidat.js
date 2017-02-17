import React from 'react';
import ReactDOM from 'react-dom';
import SkyLight from 'react-skylight';
import styles from '../dataMaps/skylightStyles'



class Candidat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidat: {
                img: "http://placekitten.com/240/240",
                color: "red"
            }
        }
    }

    selectedCandidat(  ) {
        this.props.popin.refs.candidatPopin.show();
    }

    render() {

        let borderStyle = {
          border: '4px solid #c90e47'
        };

        return(
            <div className="president" onClick={() => this.selectedCandidat()}>
                <img src={this.state.candidat.img} className="president_img" alt="president image"/>
            </div>
        )
    }
}

export default Candidat;