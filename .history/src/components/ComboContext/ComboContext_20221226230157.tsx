import React, { createContext } from 'react'

interface ComboContextProviderProps {
    children : React.ReactNode
}

const ComboContext = createContext<null>(null);

function ComboContextProvider({children}:ComboContextProviderProps) {
  return (
    <div>
        <ComboContext.Provider>{children}</ComboContext.Provider>
    </div>
  )
}

export default ComboContextProvider