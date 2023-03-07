import axios from  'axios';

export const BASE_URL = 'https://localhost:7117/';

export const ENDPOINTS = {
    users : 'users'
}

export const createAPIEndpoint = endpoint => {

    let url = BASE_URL + 'api/' + endpoint + '/';
    return{
        fetch: () => axios.get(url),
        fetchBySurname : surname => axios.get(url + '(' + surname + ')'),
        post : newRecord => axios.post(url, newRecord),
        put: (id, updateRecord) => axios.put(url + id, updateRecord),
        delete: id => axios.delete(url + id),
    }
}