import React from 'react';
import Appbar from './components/Appbar/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col'>
        <Appbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </div>
    </BrowserRouter >
  )
}

export default App