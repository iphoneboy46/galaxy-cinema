import React, { createContext, useState } from "react";

interface NameMovie {
  name: string;
}

interface MovieContextType {
  name: NameMovie;
  setName: React.Dispatch<React.SetStateAction<NameMovie>>;
}

interface MovieContextProviderProp {
  children: React.ReactNode;
}

export const MovieContext = createContext<MovieContextType | string>("");

function MovieContextProvider({ children }: MovieContextProviderProp) {
  const [name, setName] = useState<NameMovie| string>("");

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
