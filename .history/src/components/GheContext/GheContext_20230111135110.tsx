import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
    chooseList: string;
    serChooseList:React.Dispatch<React.SetStateAction<never[]>> ;
}

export const GheContext = createContext<string | null>(null);

function GheContextProvider({ children }: GheContextProviderProp) {

  const [chooseList, setChooseList] = useState([]);

  return (
    <div>
      <GheContext.Provider value={{ chooseList, setChooseList }}>
        {" "}
        {children}
      </GheContext.Provider>
    </div>
  );
}

export default GheContextProvider;