import React, { useContext } from 'react'


export const GheContext = useContext();

function GheContextProvider({children}) {
  return (
    <div>
        {children}
    </div>
  )
}

export default GheContextProvider