import React from 'react';
import Donut from './Donut/Donut';

class ActiveDonutVoters extends React.Component {
    render () {
        return (
            <div className="state-data_content_figures_block">
                <Donut/>
                <span className="state-data_content_figures_block_count" >{this.props.activeCount}</span>
                <p className="state-data_content_figures_block_text">
                    {this.props.activeCount}% active registered <br/>
                    voters in {this.props.state}
                </p>
            </div>
        )
    }
}

ActiveDonutVoters.propTypes = {
    activeCount: React.PropTypes.number.isRequired,
    state: React.PropTypes.string.isRequired
};

export default ActiveDonutVoters;