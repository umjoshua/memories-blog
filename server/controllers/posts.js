import PostMessage from "../models/postMessage.js";

export const getPosts = (req,res) => {
    res.send("Works")
}

export const createPost = async (req,res) => {
    const body = req.body;
    const newPost = new PostMessage(body)
    try {
        await newPost.save();
        return res.status(200).json(newPost);
    } catch (error) {
        return res.status(409).json({message: error.message})
    }
}
