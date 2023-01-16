import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'

function Posts() {
    const posts = useSelector((state) => state.post)
    console.log(posts.value);
    return (
        <div>
            <h2>POSTS</h2>
            <Post />
            <Post />
        </div>
    )
}

export default Posts