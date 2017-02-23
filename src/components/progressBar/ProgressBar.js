import React from 'react';

require('./progressBar.scss')

class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress: {}
        }
    }

    getTotal(democratValue, republicanValue) {
        return democratValue + republicanValue;
    }

    getPercent(value, total) {
        return (value * 100) / total;
    }

    componentWillReceiveProps(nextProps) {
        let total = this.getTotal(nextProps.democrat.value, nextProps.republican.value);
        let democratPercent = this.getPercent(nextProps.democrat.value, total);
        let republicanPercent = this.getPercent(nextProps.republican.value, total);

        this.setState({
           progress: {
               democratPercent,
               republicanPercent
           }
        });
    }

    render () {
        let bluePartStyle = {
            color: 'white',
            width: this.state.progress.republicanPercent+'%',
        };

        let redPartStyle = {
            color: 'white',
            width: this.state.progress.republicanPercent+'%'
        };

        return (
            <div className="progress">
                <div className="progress_bar">
                    <div style={redPartStyle} className="progress_bar_red"></div>
                    <div style={bluePartStyle} className="progress_bar_blue"></div>
                </div>
            </div>
        )
    }
}

export default ProgressBar;