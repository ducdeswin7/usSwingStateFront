import React from 'react';
require('./candidat.scss');

import Candidat from './Candidat';

class Candidats extends React.Component {
    render() {
        return(
            <div className="candidat-lists">
                <Candidat />
                <hr className="candidat-lists_hr"/>
                <Candidat />
            </div>
        )
    }
}

export default Candidats;