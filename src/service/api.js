import axios from 'axios';

const url = "/user"; // Ensures requests are proxied to http://localhost:3003/user

export const getallUsers = async (id) => {
    id = id || '';
    return await axios.get(`${url}/${id}`);
}

export const addUser = async (user) => {
    return await axios.post(url, user);
}

export const editUser = async (id, user) => {
    return await axios.put(`${url}/${id}`, user);
}

export const deleteUser = async (id) => {
    return await axios.delete(`${url}/${id}`);
}