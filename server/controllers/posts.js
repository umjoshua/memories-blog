import mongoose, { mongo } from "mongoose";
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

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, tags, file } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');
    
    const updatedPost = { title, message, creator, tags, file, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });
    
    res.json(updatedPost);
}