import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

export const GheContext = createContext<string | null>(null);

const [chooseList, setChooseList] = useState<[]>([]);


function GheContextProvider({ children }: GheContextProviderProp) {
  return (
    <div>
      <GheContext.Provider value={{}}> {children}</GheContext.Provider>
    </div>
  );
}

export default GheContextProvider;
