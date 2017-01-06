import React from 'react';

require('./progressBar.scss')

class ProgressBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            progress: {
                red: '30',
                grey: '0',
                blue: '70',
            }
        }
    }
    render () {
        let bluePartStyle = {
            color: 'white',
            width: this.state.progress.blue+'%',
        };

        let redPartStyle = {
            color: 'white',
            width: this.state.progress.red+'%'
        };

        let swingPartStyle = {
            color: '',
            width: this.state.progress.grey+'%',
            backgroundColor: 'grey',
        };

        console.log(this.state);

        return (
            <div className="progress">
                <div className="progress_bar">
                    <div style={redPartStyle} className="progress_bar_red"></div>
                    <div style={swingPartStyle}></div>
                    <div style={bluePartStyle} className="progress_bar_blue"></div>
                </div>
                <div className="progress_percent">
                    <h2 className="progress_percent_red">{this.state.progress.red}</h2>
                    { this.state.progress.grey !== 0 &&
                        <h2 className="progress_percent_grey">{this.state.progress.grey}</h2>}
                    <h2 className="progress_percent_blue">{this.state.progress.blue}</h2>

                </div>
            </div>
        )
    }
}

export default ProgressBar;