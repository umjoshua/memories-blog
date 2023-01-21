import React, { useEffect, useState } from 'react'
import Appbar from './components/Appbar/Appbar'
import Posts from './components/posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { setPosts } from './features/posts';
import axios from 'axios';

function App() {
  const [currentId, setcurrentId] = useState(null);
  const url = "http://localhost:5000/posts";

  const dispatch = useDispatch();

  const fetchposts = async () => {
    const data = await axios.get(url).then((response) => response.data)
    return data;
  }

  useEffect(() => {
    async function fetchPost() {
      const data = await fetchposts();
      dispatch(setPosts(data));
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