import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreIcon from '@mui/icons-material/More';


function Post({ item }) {
  console.log(item);
  return (
    <div className='rounded shadow-md h-[400px] w-[300px] flex flex-col justify-between p-2'>
      <div className='h-[40%] rounded-tr-md rounded-tl-md flex flex-row justify-between p-3'
       style={{ backgroundImage: `url(${item.file})`, backgroundSize: 'cover'}}>
        <div className='text-white'>{item.creator}<br />
          <span className='text-[10px]'>{item.createdAt}</span>
        </div>
        <MoreIcon style={{ color: 'white' }} />
      </div>
      <div className='p-2'>
        <div className='text-[15px] text-gray-500'>
          {item.tags}
        </div>
        <div className='mt-1 mb-2'>
          <h1>{item.title}</h1>
        </div>
        <div className='text-[15px] text-gray-500'>
          {item.message}
        </div>
      </div>
      <div className='flex flex-row justify-between p-2 relative bottom-0'>
        <div className='flex flex-row items-center'><button><FavoriteIcon style={{ color: "red" }} /></button>{item.likeCount}</div>
        <button><DeleteForeverIcon /></button>
      </div>
    </div>
  )
}

export default Post