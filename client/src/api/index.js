import axios from 'axios';

const baseURL = "http://localhost:5000";

const API = axios.create({ baseURL })

export const fetchPosts = async () => await API.get('/posts');

export const editPost = async (id, post, config) => await API.patch('/posts/' + id, post, config);

export const createPost = async (post, config) => await API.post('/posts/createPost', post, config);

export const likePost = async (id, config) => await API.patch('/posts/' + id + '/likePost', { data: null }, config);

export const deletePost = async (id, config) => await API.delete('/posts/' + id, config);

export const signUp = async (formData) => API.post('/login/signup', formData);

export const signIn = async (formData) => await API.post('/login/signin', formData);