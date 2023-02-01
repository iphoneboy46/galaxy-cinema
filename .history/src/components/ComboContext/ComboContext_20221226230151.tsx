import React, { createContext } from 'react'

interface ComboContextProviderProps {
    children : React.ReactNode
}

const ComboContext = createContext<null>(null);

function ComboContextProvider({children}:ComboContextProviderProps) {
  return (
    <div>
        <p>{children}</p>
    </div>
  )
}

export default ComboContextProvider