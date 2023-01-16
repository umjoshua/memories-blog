import React from 'react'
import Appbar from './components/Appbar/Appbar'
import Posts from './components/posts/Posts'
import Form from './components/Form/Form'

function App() {
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