import axios from 'axios'

export async function getAllBooks(ownerId) {
    return axios.get('http://localhost:1000/book/read/byOwner/' + ownerId)
}

export function createBook(data) {
    return axios.post('http://localhost:1000/book/create', data)
}

export function updateBook(data) {
    return axios.put('http://localhost:1000/book/delete', {data})
}

export function deleteBook(id) {
    return axios.delete('http://localhost:1000/user/delete', {id})
}