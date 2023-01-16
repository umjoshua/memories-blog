import React,{useEffect} from 'react'
import Appbar from './components/Appbar/Appbar'
import Posts from './components/posts/Posts'
import Form from './components/Form/Form'
import { useDispatch } from 'react-redux'
import { fetchposts } from './api'
import {Posts as PostsAction} from './features/posts';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log('hii')
    const {data} = fetchposts();
    dispatch(PostsAction(data));
    console.log(data);
  },[])
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