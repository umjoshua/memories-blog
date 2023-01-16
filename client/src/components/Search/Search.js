import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Search() {
  return (
    <div className='items-center'>
        <input type='text' className='rounded-xl border-black border-[1px]'></input>
        <SearchIcon/>
    </div>
  )
}

export default Search