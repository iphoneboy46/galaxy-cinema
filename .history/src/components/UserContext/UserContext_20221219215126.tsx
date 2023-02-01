import React, { createContext } from 'react'


export const UserContext = createContext(null)


function UserContextProvider() {
  return (
    <div>UserContext</div>
  )
}

export default UserContextProvider