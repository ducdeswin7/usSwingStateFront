import React from 'react';

require('./progressBarInfo.scss')

class ProgressBarInfo extends React.Component {

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

        return (
            <div className="progress-info">
                <div className="progress-info_bar">
                    <div style={redPartStyle} className="progress_bar_red"></div>
                    <div style={swingPartStyle}></div>
                    <div style={bluePartStyle} className="progress_bar_blue"></div>
                </div>
            </div>
        )
    }
}

export default ProgressBarInfo;