import axios from 'axios';

const url = "http://localhost:5000/posts/";

export const fetchPosts = async () => {
    return await axios.get(url).then((response) => response.data);
};

export const editPost = async (id, post) => {
    try {
        return await axios.patch(url + id, post).then((response) => response.data);
    } catch (error) {
    }
}

export const createPost = async (post) => {
    try {
        return await axios.post(url + 'createPost', post).then((response) => response.data);
    } catch (error) {
    }
}