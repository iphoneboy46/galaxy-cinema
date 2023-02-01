import React, { createContext } from 'react'


const UserContext = createContext()


function UserContextProvider() {
  return (
    <div>UserContext</div>
  )
}

export default UserContextProvider