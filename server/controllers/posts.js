import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find(); 
        res.status(200).json(postMessages);
    } catch (error) {
        res.status(409).json(error.message);
    }
}

export const createPost = async (req, res) => {
    const body = req.body;
    const newPost = new PostMessage(body)
    try {
        await newPost.save();
        return res.status(200).json(newPost);
    } catch (error) {
        return res.status(409).json({ message: error.message })
    }
}
