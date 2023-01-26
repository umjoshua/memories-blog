import React from 'react';
import Appbar from './components/Appbar/Appbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Auth from './components/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="98770873623-s1btqosnvnklca7hadhichj1vk3914s4.apps.googleusercontent.com">
      <BrowserRouter>
        <div className='flex flex-col'>
          <Appbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </div>
      </BrowserRouter >
    </GoogleOAuthProvider>
  )
}

export default App