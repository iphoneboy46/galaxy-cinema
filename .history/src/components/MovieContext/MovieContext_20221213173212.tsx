import React, { createContext, useEffect, useState } from "react";



interface MovieContextType {
  name: any;
  setName: React.Dispatch<React.SetStateAction<any>>;
}

interface MovieContextProviderProp {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextType | null>(null);

function MovieContextProvider({ children }: MovieContextProviderProp) {

  

  const [name, setName] = useState<string| null >(JSON.parse(localStorage.getItem('movie')));

  
  return (
    <div>
      <MovieContext.Provider value={{ name, setName }}>
        {" "}
        {children}
      </MovieContext.Provider>
    </div>
  );
}

export default MovieContextProvider;
