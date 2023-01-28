import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import moment from 'moment';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../redux/posts';
import * as api from '../../../api';

function Post({ item, currentId, setcurrentId }) {
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    api.deletePost(id);
    dispatch(deletePost(id));
  }

  const handleLike = async (id) => {
    const data = await api.likePost(id);
    console.log(data);
    dispatch(likePost(data));
  }

  return (
    <div className='rounded-md shadow-md h-[400px] w-[300px] flex flex-col justify-between p-2 bg-white m-2'>
      <div className='h-max'>
        <div className='h-[160px] rounded-tr-md rounded-tl-md flex flex-row justify-between p-3'
          style={{ backgroundImage: `url(${item.file})`, backgroundSize: 'cover' }}>
          <div className='text-white'>{item.creator}<br />
            <span className='text-[10px]'>{moment(item.createdAt).fromNow()}</span>
          </div>
          <div>
            <button onClick={() => setcurrentId(item._id)}>
              <EditIcon style={{ color: 'white' }} />
            </button>
          </div>
        </div>
        <div className='text-[15px] text-gray-500'>
          {item.tags.map((tag) => `#${tag} `)}
        </div>
        <div className='p-2'>
          <div className='mt-1 mb-2'>
            <h1>{item.title}</h1>
          </div>
          <div className='text-[15px] text-gray-500 long-word overflow-hidden'>
            {item.message}
          </div>
        </div>
        <div className='flex flex-row justify-between p-2 relative bottom-0'>
        </div>
      </div>
      <div className='flex flex-row items-center justify-between'>
        <button onClick={() => handleLike(item._id)}>
          <div>
            <FavoriteIcon style={{ color: "red" }} />{item.likes.length}
          </div>
        </button >
        <button onClick={() => handleDelete(item._id)}>
          <DeleteForeverIcon />
        </button>
      </div>
    </div >
  )
}

export default Post