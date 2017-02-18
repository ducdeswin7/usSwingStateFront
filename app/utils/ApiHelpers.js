import axios from 'axios';

function getCandidatsInfos() {
    return axios.get('http://unitedswingstates.com/api/v1/list/state');
}

export function getStateInfos(statename) {
    return axios.get(`http://unitedswingstates.com/api/v1/list/state/${statename}`)
        .then((response) => ({stateCurrent: response.data}));
}

export default function getInfos(statename) {
    return axios.all([getCandidatsInfos(), getStateInfos(statename)])
        .then((arr) => ({candidats: arr[0].data, selectedState: arr[1].data}))
};
