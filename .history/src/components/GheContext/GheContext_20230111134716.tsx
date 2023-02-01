import React, { createContext } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

export const GheContext = createContext<string>("");

function GheContextProvider({ children }: GheContextProviderProp) {
  return (
    <div>
      <GheContext.Provider value={{}}> {children}</GheContext.Provider>
    </div>
  );
}

export default GheContextProvider;
