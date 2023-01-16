import React from 'react'
import memories from '../../images/memories.png'
import Search from '../Search/Search'

function Appbar() {
  return (
    <div className='h-[60px] flex flex-row shadow-md static items-center justify-evenly'>
      <div className='flex flex-row items-center'>
        <img src={memories} height={40} className='h-[40px]'/>
        <h2>Memories</h2>
      </div>
      <Search/>
    </div>
  )
}

export default Appbar