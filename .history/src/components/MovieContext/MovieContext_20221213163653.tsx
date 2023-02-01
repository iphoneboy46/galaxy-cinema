import React, { createContext, useEffect, useState } from "react";



interface MovieContextType {
  name: string | null;
  setName: React.Dispatch<React.SetStateAction<string | null>>;
}

interface MovieContextProviderProp {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextType | null>(null);

function MovieContextProvider({ children }: MovieContextProviderProp) {
  const [name, setName] = useState<string| null>(null);

   useEffect(()=>{
    setName(name);
   },[name])

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
