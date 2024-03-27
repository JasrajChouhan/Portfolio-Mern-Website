import React, { useContext } from 'react'
import { UserContext } from '../../context/user/UserContext'
import axios from 'axios'

function Logout() {
  const {user , setUser , isAuthorized , setIsAuthorized} = useContext(UserContext)
  
  return (
    <div>
      <button
      onClick={handleLogOut}
        className='btn btn-danger bg-red-400'
      >log out</button>
    </div>
  )
}

export default Logout