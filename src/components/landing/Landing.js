import React from 'react';
import {Link} from 'react-router';

require('./landing.scss');

let imgUrl = './public/images/landing-bg.jpg';
let style = {
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        overflow: 'hidden',
    };

class Landing extends React.Component {
    render() {
        return (
            <div className="landing" style={style}>
                <div className="landing_right-triangle"></div>
                <div className="landing_left-triangle"></div>
                <div className="bg-overlay"></div>
                <div className="absolute-center">
                    <h1 className="united">United</h1>
                    <h2 className="swing-state">Swing states</h2>
                    <p className="subtext">Vous trouverez au travers de cette expérience
                        d'innonbrables données sur les elections présidentielles
                        américaines récentes ou passées</p>

                    <div className="enter">
                        <Link to={"home"} className="enter_button">Enter</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Landing;