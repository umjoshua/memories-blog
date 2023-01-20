import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';

function Posts({ currentId, setcurrentId }) {
    const posts = useSelector((state) => state.post.value);
    return (
        posts.length ? <div className='flex flex-wrap m-4 '>
            {posts.map((item) => { return <Post key={item._id} item={item} currentId={currentId} setcurrentId={setcurrentId} /> })}
        </div> : <CircularProgress />
    )
}

export default Posts