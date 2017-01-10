import React from 'react';
import Candidat from '../candidats/Candidat';

require('./winners.scss');


class Winners extends React.Component {
    render() {
        return(
            <div className="winners">
                <Candidat />
                <Candidat />
                <Candidat />
                <Candidat />
            </div>
        )
    }
}

export default Winners;