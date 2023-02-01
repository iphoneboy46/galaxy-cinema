import React, { createContext } from 'react'

interface NameMovie {
    name: string;
}

interface MovieContextType {
    name: NameMovie;
    setName: string;
}

interface MovieContextProviderProp{
    children: React.ReactNode
}

export const MovieContext = createContext<MovieContextType | null>(null)


function MovieContextProvider({children}:MovieContextProviderProp) {


  return (
    <div>
       <MovieContext.Provider> {children}</MovieContext.Provider>
    </div>
  )
}

export default MovieContextProvider