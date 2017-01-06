import React from 'react';

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

    render() {
        let styleInline = {
            backgroundImage: 'url('+ this.state.candidat.img +')'
        };

        return(
            <div className="hexagon hexagon2">
                <div className="hexagon-in1">
                    <div className="hexagon-in2" style={styleInline}>
                    </div>
                </div>
            </div>
        )
    }
}

export default Candidat;