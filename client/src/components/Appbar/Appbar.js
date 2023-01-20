import React from 'react'
import memories from '../../images/memories.png'
import Search from '../Search/Search'

function Appbar() {
  return (
    <div className='h-[60px] flex flex-row shadow-md static items-center justify-between p-5 bg-white'>
      <div className='flex flex-row items-center'>
        <img src={memories} alt="Memories" height={40} className='h-[40px] mr-2'/>
        <h2>Memories</h2>
      </div>
      <Search/>
    </div>
  )
}

export default Appbar