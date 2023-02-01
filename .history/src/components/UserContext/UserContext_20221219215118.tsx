import React, { createContext } from 'react'


export const UserContext = createContext()


function UserContextProvider() {
  return (
    <div>UserContext</div>
  )
}

export default UserContextProvider