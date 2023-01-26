import React from 'react'
import memories from '../../images/memories.png'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'

function Appbar() {
  return (
    <div className='h-[60px] flex flex-row shadow-md static items-center justify-between p-5 bg-white'>
      <div className='flex flex-row items-center'>
        <img src={memories} alt="Memories" height={40} className='h-[40px] mr-2' />
        <h2 className='px-2'>Memories</h2>
      </div>
      <div className='flex flex-row items-center'>
        <Search />
        <div className='m-x-1'>
          <Link to="/auth">
            <button variant="contained" to="auth" className='bg-blue-500 p-1 rounded text-white'>Sign in</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Appbar