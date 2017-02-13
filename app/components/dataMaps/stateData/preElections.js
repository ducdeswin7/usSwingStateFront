import React from 'react';
import Donut from './Donut/Donut';

class PreElections extends React.Component {

    render() {
        return (
            <div className="state-data_content_polls">
                <div className="state-data_content_polls_item">
                    <Donut />
                    <h3 className="state-data_content_polls_item_title">Opinion Savvy</h3>
                    <p className="state-data_content_polls_item_text">11/07/2016</p>
                </div>
                <div className="state-data_content_polls_item">
                    <Donut />
                    <h3 className="state-data_content_polls_item_title">Opinion Savvy</h3>
                    <p className="state-data_content_polls_item_text">11/07/2016</p>
                </div>
                <div className="state-data_content_polls_item">
                    <Donut />
                    <h3 className="state-data_content_polls_item_title">Opinion Savvy</h3>
                    <p className="state-data_content_polls_item_text">11/07/2016</p>
                </div>
                <div className="state-data_content_polls_item">
                    <Donut />
                    <h3 className="state-data_content_polls_item_title">Opinion Savvy</h3>
                    <p className="state-data_content_polls_item_text">11/07/2016</p>
                </div>
            </div>
        )
    }
}

export default PreElections;