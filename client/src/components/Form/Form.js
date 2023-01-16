import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import FileBase64 from 'react-file-base64';

function Form() {

    const [post, setPost] = useState({ creator: '', title: '', message: '', tags: '' });

    const handleSubmit = () => {
        console.log(post);
        clearSubmit();
    }

    const clearSubmit = () => {
        setPost({ creator: '', title: '', message: '', tags: '' })
        console.log('clear')
    }

    return (
        <div className='shadow-md p-2 rounded-md m-2 items-center justify-center'>
            <div className='flex flex-row justify-center p-2 items-center'>
                <h2>Create a Memory</h2>
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
                        onChange={(e) => { setPost({ ...post, tags: e.target.value }) }}>
                    </input>
                </div>
                <div className='p-1'>
                    <span>Photo:</span>
                    <br></br>
                    <input type="file"></input>
                </div>
                <div className='p-2'>
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