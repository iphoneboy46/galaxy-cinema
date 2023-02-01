import React, { createContext } from 'react'

interface NameMovie {
    name: string;
}

interface MovieContextType {

}

interface MovieContextProviderProp{
    children: React.ReactNode
}

export const MovieContext = createContext(null)

function MovieContextProvider() {
  return (
    <div>MovieContextProvider</div>
  )
}

export default MovieContextProvider