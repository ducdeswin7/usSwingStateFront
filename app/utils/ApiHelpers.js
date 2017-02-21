import axios from 'axios';

export function getCandidatsInfos(presidentName) {
    return axios.get(`http://unitedswingstates.com/api/v1/list/candidate/${presidentName}`)
        .then((response) => ({candidate: response.data}));
}

export function getStateInfos(statename) {
    return axios.get(`http://unitedswingstates.com/api/v1/list/state/${statename}`)
        .then((response) => ({stateCurrent: response.data}));
}

export default function getInfos(statename, presidentName) {
    return axios.all([getCandidatsInfos(presidentName), getStateInfos(statename)])
        .then((arr) => ({candidats: arr[0].data, selectedState: arr[1].data}))
};
