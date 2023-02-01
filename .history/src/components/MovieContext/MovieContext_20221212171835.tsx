import React, { createContext, useState } from "react";

interface NameMovie {
  name: string;
}

interface MovieContextType {
  name: NameMovie;
  setName: string;
}

interface MovieContextProviderProp {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextType | null>(null);

function MovieContextProvider({ children }: MovieContextProviderProp) {
  const [name, setName] = useState<NameMovie | null>(null);

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
