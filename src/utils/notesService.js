import tokenService from './tokenService';

export default {
    getAll,
    create
}

const BASE_URL = '/api/foods';

function getAll() {
    return fetch(BASE_URL).then(res => res.json());
}

function create(food) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'content-type': 'application/json', 'Authorization': 'Bearer ' + tokenService.getToken() },
        body: JSON.stringify(food)
    }).then(res => res.json());
}