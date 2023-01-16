import axios from 'axios';

const url = "http://localhost:5000/posts"

export const fetchposts = async () => await axios.get(url);