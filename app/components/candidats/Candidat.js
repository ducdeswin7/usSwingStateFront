import React from 'react';
import ReactDOM from 'react-dom';
import SkyLight from 'react-skylight';
import styles from '../dataMaps/skylightStyles'

class Candidat extends React.Component {
    constructor(props) {
        super(props);
    }

    selectedCandidat() {
        this.props.popin.refs.candidatPopin.show();
    }

    render() {

        let borderStyle = {
          border: '4px solid ' + this.props.color
        };

        return(
            <div className="president" onClick={() => this.selectedCandidat()}>
                <img src={this.props.image} style={borderStyle} className="president_img" alt="president image"/>
            </div>
        )
    }
}

Candidat.propTypes = {
    color: React.PropTypes.string.isRequired,
    image: React.PropTypes.string.isRequired,
};

export default Candidat;