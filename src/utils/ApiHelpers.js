import axios from 'axios';

export function getCandidatsInfos(presidentName) {
    return axios.get(`http://unitedswingstates.com/api/v1/list/candidate/${presidentName}`)
        .then((response) => ({candidate: response.data}));
}

export function getStateInfos(statename) {
    return axios.get(`http://unitedswingstates.com/api/v1/list/state/${statename}`)
        .then((arr) => ({stateCurrent: arr.data }))
}

export function getElectionCandidat(year) {
    return axios.get(`http://unitedswingstates.com/api/v1/list/candidate/election/${year}`)
        .then((response) => ({candidates: response.data}));
}

export function getWinners() {
    return axios.get(`http://unitedswingstates.com/api/v1/list/presidents`)
        .then((response) => ({winners: response.data}));
}

export function getElectionResult(year) {
    return axios.get(`http://unitedswingstates.com/api/v1/election/${year}/result`)
        .then((response) => ({results: response.data}));
}

export default function getInfos(statename, presidentName) {
    return axios.all([getCandidatsInfos(presidentName), getStateInfos(statename)])
        .then((arr) => ({candidats: arr[0].data, selectedState: arr[1].data}))
};
