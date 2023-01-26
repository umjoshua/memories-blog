import React from 'react'
import memories from '../../images/memories.png'
import Search from '../Search/Search'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutReducer } from '../../redux/auth'

function Appbar() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.value);

  const logout = () => {
    dispatch(logoutReducer());
  }

  return (
    <div className='h-[60px] flex flex-row shadow-md items-center justify-between p-5 bg-white relative'>
      <div className='flex flex-row items-center'>
        <img src={memories} alt="Memories" height={40} className='h-[40px] mr-2' />
        <h2 className='px-2'>Memories</h2>
      </div>
      <div className='flex flex-row items-center'>
        <Search />
        <div className='m-x-1'>
          {user ?
            <div className='flex flex-row'>
              <img className='flex justify-center rounded-[50%] h-[30px] w-[30px] bg-gray-100 items-center' src={user.picture} alt={user.name.charAt(0)}></img>
              <p className='p-1'>{user.name}</p>
              <button className='bg-red-500 mx-1 p-1 rounded-md text-white'
                onClick={logout}>
                Log Out
              </button>
            </div>
            :
            <Link to="/auth">
              <button to="auth" className='bg-blue-500 p-1 rounded text-white'>Sign in</button>
            </Link>}
        </div>
      </div>
    </div >
  )
}

export default Appbar