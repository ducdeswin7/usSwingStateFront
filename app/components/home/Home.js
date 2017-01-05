import React from 'react';

class Home extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="home_bar">
                    <div className="home_bar_progress"></div>
                    <div className="home_bar_percent">
                        <h2>57%</h2>
                        <h2>43%</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;