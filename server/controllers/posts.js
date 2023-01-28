import mongoose from "mongoose";
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
    body.creator = req.userId;
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
    const post = await PostMessage.findById(id);

    if (post._id != id) {
        return res.status(409).send('Unauthorized access');
    }
    const { title, message, creator, tags, file } = req.body;

    const userId = req.userId;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');

    const updatedPost = { creator: userId, title, message, creator, tags, file, _id: id };
    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    const post = await PostMessage.findById(id);
    if (post._id != id) {
        return res.status(409).send('Unauthorized access');
    }

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No post with this id');

    await PostMessage.findByIdAndRemove(id);

    res.json({ message: 'post deleted succesfully' });
}

export const likePost = async (req, res) => {
    const userId = String(req.userId);
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with this id");

    const post = await PostMessage.findById(id);
    const index = post.likes.findIndex((id) => id === userId);

    if (index == -1) {
        post.likes.push(userId);
    } else {
        post.likes = post.likes.filter((id) => id !== userId);
    }

    const data = await PostMessage.findByIdAndUpdate(id, post, { new: true });
    res.status(200).json(data);

}