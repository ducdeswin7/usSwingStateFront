import React from 'react';
import Donut from './Donut/Donut';
import PreElections from './preElections';
import ElectoralCollege from './ElectoralCollege';
import ProgressBarInfo from '../../progressBar/ProgressBarInfo';
import InformationsText from './InformationsText';

class StateData extends React.Component {
    render() {
        return (
            <div className="state-data">
                <div className="state-data_header">
                    <h1 className="state-data_header_title">{this.props.state}</h1>
                </div>
                <div className="state-data_content">
                    <h2 className="state-data_content_title">
                        Context of the election
                    </h2>

                    <div className="state-data_content_informations">
                        <InformationsText />
                        <InformationsText />
                    </div>
                    <h2 className="state-data_content_title">
                        Pre-election polls
                    </h2>

                    <PreElections />

                    <div className="state-data_content_title-double">
                        <div className="state-data_content_title-double_container">
                            <h2 className="state-data_content_title-double_container_title">Electoral college</h2>
                            <h2 className="state-data_content_title-double_container_title">Recent elections</h2>
                        </div>
                    </div>

                    <div className="state-data_content_informations">
                        <div className="state-data_content_informations_block">
                            <ElectoralCollege />
                        </div>

                        <div className="state-data_content_informations_block">
                            <ProgressBarInfo />
                            <ProgressBarInfo />
                            <ProgressBarInfo />
                            <ProgressBarInfo />
                        </div>
                    </div>

                    <h2 className="state-data_content_title">
                        Key Figures
                    </h2>

                </div>
            </div>
        )
    }
}

export default StateData;