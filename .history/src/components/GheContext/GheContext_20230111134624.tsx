import React, { useContext } from 'react'

interface GheContextProviderProp {
    children: React.ReactNode
}

export const GheContext = useContext<string>("");

function GheContextProvider({children}:GheContextProviderProp) {
  return (
    <div>
        {children}
    </div>
  )
}

export default GheContextProvider