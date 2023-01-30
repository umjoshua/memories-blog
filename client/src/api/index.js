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


export const fetchPosts = async () => await API.get('/posts');

export const editPost = async (id, post) => await API.patch('/posts/' + id, post, config);

export const createPost = async (post) => await API.post('/posts/createPost', post, config);

export const likePost = async (id) => await API.patch('/posts/' + id + '/likePost', { data: null }, config);

export const deletePost = async (id) => await API.delete('/posts/' + id, config);

export const signUp = async (formData) => API.post('/login/signup', formData);

export const signIn = async (formData) => await API.post('/login/signin', formData);