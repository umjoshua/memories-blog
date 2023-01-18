import React from 'react'
import Post from './post/Post'
import { useSelector } from 'react-redux'
import CircularProgress from '@mui/material/CircularProgress';

function Posts() {
    const data = useSelector((state) => state.post);
    const posts = data.value;
    return (
        !posts.length ? <CircularProgress /> : (<div className='flex flex-wrap m-4'>
            {posts.map((item) => { return <Post item={item} /> })}
        </div>)
    )
}

export default Posts