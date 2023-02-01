import React, { createContext } from 'react'


export const UserContext = createContext(null)


function UserContextProvider() {
  return (
    <div>
        {children}
    </div>
  )
}

export default UserContextProvider