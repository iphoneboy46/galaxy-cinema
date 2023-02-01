import React, { createContext } from 'react'

const ComboContext = createContext<>(null)

function ComboContextProvider({children}) {
  return (
    <div>
        <p>{children}</p>
    </div>
  )
}

export default ComboContextProvider