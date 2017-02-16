import React from 'react';
import ActiveVoters from './ActiveVoters';
import ActiveDonutVoters from './ActiveDonutVoters';

class KeyFigures extends React.Component {
    render () {

        return (
            <div>
                <div className="state-data_content_figures">
                    <ActiveVoters state="Florida" activeCount={12.968} imageLink="../../../public/images/group.png" />
                    <ActiveVoters state="Florida" activeCount={12.968} imageLink="../../../public/images/female.png" />
                    <ActiveVoters state="Florida" activeCount={12.968} imageLink="../../../public/images/symbol-male.png" />
                    <ActiveVoters state="Florida" activeCount={12.968} imageLink="../../../public/images/group.png" />
                </div>

                <div className="state-data_content_figures">
                    <ActiveDonutVoters state="Florida" activeCount={88}/>
                    <ActiveDonutVoters state="Florida" activeCount={66}/>
                    <ActiveDonutVoters state="Florida" activeCount={88}/>
                    <ActiveDonutVoters state="Florida" activeCount={70}/>
                </div>

            </div>
        )
    }
}

export default KeyFigures;