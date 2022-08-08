import axios from 'axios'

export async function login(data) {
    return axios.post('http://localhost:1000/user/login', data)
}

export function create(data) {
    return axios.post('http://localhost:1000/user/create', data)
}