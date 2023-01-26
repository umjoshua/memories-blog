import React from 'react'
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import postReducer from './redux/posts';
import { authReducer } from './redux/auth';

const store = configureStore({
  reducer: {
    post: postReducer,
    auth: authReducer,
  }
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);