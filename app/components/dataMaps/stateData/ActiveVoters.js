import React from 'react';

class ActiveVoters extends React.Component {
    render () {
        return (
            <div className="state-data_content_figures_block">
                <img className="state-data_content_figures_block_img" src={this.props.imageLink} alt=""/>
                <p className="state-data_content_figures_block_text">
                    {this.props.activeCount} active registered <br/>
                    voters in {this.props.state}
                </p>
            </div>
        )
    }
}

ActiveVoters.propTypes = {
    activeCount: React.PropTypes.number.isRequired,
    imageLink: React.PropTypes.string.isRequired,
    state: React.PropTypes.string.isRequired
};

export default ActiveVoters;