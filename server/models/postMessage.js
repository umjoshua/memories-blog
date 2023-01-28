import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    likes: {
        type: [String],
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    file: String
})

const PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage