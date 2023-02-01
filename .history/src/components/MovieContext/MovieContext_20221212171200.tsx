import React, { createContext } from 'react'

interface NameMovie {
    name: string;
}

export const MovieContext = createContext(null)

function MovieContextProvider() {
  return (
    <div>MovieContextProvider</div>
  )
}

export default MovieContextProvider