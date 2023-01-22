import React, { useState, useEffect } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { setPosts, updatePost } from '../../redux/posts';
import { useSelector } from 'react-redux';
import * as api from '../../api';

function Form({ currentId, setcurrentId }) {

    const PostData = useSelector((state) => state.post.value);
    const editPost = useSelector((state) => (currentId ? state.post.value.find((message) => message._id === currentId) : null));
    const [post, setPost] = useState({ creator: '', title: '', message: '', tags: '', file: '' });
    const dispatch = useDispatch();

    useEffect(() => {
        if (editPost) setPost(editPost);
    }, [editPost])

    const postdata = async () => {
        if (currentId) {
            const data = api.editPost(currentId, post);
            dispatch(updatePost(data));
        }
        else {
            const data = await api.createPost(post);
            dispatch(setPosts([...PostData, data]))
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        postdata();
        clearSubmit();
    }

    const clearSubmit = () => {
        setPost({ creator: '', title: '', message: '', tags: '', file: '' })
        setcurrentId(null);
    }

    return (
        <div className='shadow-md p-2 rounded-md m-5 items-center justify-center bg-white'>
            <div className='flex flex-row justify-center p-2 items-center'>
                <h2>{currentId ? 'Edit' : 'Create'} a Memory</h2>
                <CreateIcon />
            </div>
            <div className='p-2'>
                <div className='p-1'>
                    <span>Creator: </span>
                    <br></br>
                    <input type="text" className='rounded-md border-[2px] w-full'
                        value={post.creator}
                        onChange={(e) => { setPost({ ...post, creator: e.target.value }) }}>
                    </input>
                </div>
                <div className='p-1'>
                    <span>Title: </span>
                    <br></br>
                    <input type="text" className='rounded-md border-[2px] w-full'
                        value={post.title}
                        onChange={(e) => { setPost({ ...post, title: e.target.value }) }}>
                    </input>
                </div>
                <div className='p-1'>
                    <span>Message: </span>
                    <br></br>
                    <textarea className='rounded-md border-[2px] w-full'
                        value={post.message}
                        onChange={(e) => { setPost({ ...post, message: e.target.value }) }}>
                    </textarea>
                </div>
                <div className='p-1'>
                    <span>Tags: </span>
                    <br></br>
                    <input type="text" className='rounded-md border-[2px] w-full'
                        value={post.tags}
                        onChange={(e) => { setPost({ ...post, tags: e.target.value.split(',') }) }}>
                    </input>
                </div>
                <div className='p-1'>
                    <span >Photo:</span>
                    <br></br>
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPost({ ...post, file: base64 })} />
                </div>
                <div className=''>
                    <button className='bg-teal-300 p-1 h-min m-[20px] w-[100px] rounded-md'
                        onClick={clearSubmit}
                    >Clear</button>
                    <button className='bg-blue-300 p-1 h-min m-[20px] w-[100px] rounded-md'
                        onClick={handleSubmit}
                    >Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Form