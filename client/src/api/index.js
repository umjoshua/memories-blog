import axios from 'axios';

const baseURL = "http://localhost:5000";

const API = axios.create({ baseURL })

let token = JSON.parse(localStorage.getItem('profile'))?.token;
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
};


export const fetchPosts = async () => {
    return await API.get('/posts').then((response) => response.data);
};

export const editPost = async (id, post) => {
    try {
        return await API.patch('/posts' + id, post, config).then((response) => response.data);
    } catch (error) {
    }
}

export const createPost = async (post) => {
    try {
        return await API.post('/posts/createPost', post, config).then((response) => response.data);
    } catch (error) {
    }
}

export const likePost = async (id) => {
    try {
        return await API.patch('/posts/' + id + '/likePost', { data: null }, config).then((response) => response.data);
    } catch (error) {
    }
}

export const deletePost = async (id) => {
    try {
        await API.delete('/posts/' + id, config);
    } catch (error) {

    }
}

export const signUp = async (formData) => {
    try {
        return await API.post('/login/signup', formData).then((response) => response.data);
    } catch (error) {

    }
}

export const signIn = async (formData) => {
    try {
        return await API.post('/login/signin', formData).then((response) => response.data);
    } catch (error) {

    }
}