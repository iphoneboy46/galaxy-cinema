import React, { useContext } from 'react'


export const GheContext = useContext<string>("");

function GheContextProvider({children}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default GheContextProvider