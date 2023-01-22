import React, { useEffect, useState } from 'react'
import Appbar from './components/Appbar/Appbar'
import Posts from './components/posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { setPosts } from './redux/posts';
// import axios from 'axios';
import { fetchPosts } from './api'

function App() {
  const [currentId, setcurrentId] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchPost() {
      const data = await fetchPosts();
      dispatch(setPosts(data));
      console.log(data);
    }
    fetchPost();
  }, [dispatch, currentId])

  return (
    <div className='flex flex-col'>
      <Appbar />
      <div className='flex flex-row justify-evenly'>
        <div className='mt-[10px]'>
          <Posts setcurrentId={setcurrentId} currentId={currentId} />
        </div>
        <div className='mt-[10px]'>
          <Form currentId={currentId} setcurrentId={setcurrentId} />
        </div>
      </div>
    </div>
  )
}

export default App