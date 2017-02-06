import axios from 'axios';

function getCandidatsInfos() {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/2`);
}

function getStateInfos() {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/2`);
}

export default function getInfos() {
    return axios.all([getCandidatsInfos(), getStateInfos()])
        .then((arr) => ({candidats: arr[0].data, currentState: arr[1].data}))
};