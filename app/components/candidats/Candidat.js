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

        let hexagonStyle = {
            borderLeft: 'solid 2px #ff0000',
            borderRight: 'solid 2px #ff0000',
            backgroundImage: 'url('+ this.state.candidat.img +')'
        };

        let hexTopStyle = {
            top: '-31.8198px',
            borderTop: 'solid 4.8284px #ff0000',
            borderRight: 'solid 4.8284px #ff0000'
        };

        let hexBottomStyle = {
            borderBottom: 'solid 4.8284px #ff0000',
            borderLeft: 'solid 4.8284px #ff0000'
        };

        return(
            <div className="hexagon" onClick={() => this.selectedCandidat()} style={hexagonStyle}>
                <div className="hexTop" style={hexTopStyle}></div>
                <div className="hexBottom" style={hexBottomStyle}></div>
            </div>
        )
    }
}

export default Candidat;