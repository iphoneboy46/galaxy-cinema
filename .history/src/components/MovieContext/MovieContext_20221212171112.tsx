import React, { createContext } from 'react'

interface NameMovie {
    name: string
}

export const MovieContext = createContext()

function MovieContextProvider() {
  return (
    <div>MovieContextProvider</div>
  )
}

export default MovieContextProvider