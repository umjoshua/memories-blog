import React, { useEffect } from 'react'
import Appbar from './components/Appbar/Appbar'
import Posts from './components/posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { Posts as PostsAction } from './features/posts';
import axios from 'axios';

function App() {

  const url = "http://localhost:5000/posts";

  const dispatch = useDispatch();

  const fetchposts = async () => {
    const data = await axios.get(url).then((response) => response.data)
    return data;
  }

  useEffect(() => {
    async function fetchPost (){
      const data = await fetchposts();
      dispatch(PostsAction(data));
    }
    fetchPost();
  }, [])

  return (
    <div className='flex flex-col'>
      <Appbar />
      <div className='flex flex-row justify-evenly'>
        <Posts />
        <Form />
      </div>
    </div>
  )
}

export default App