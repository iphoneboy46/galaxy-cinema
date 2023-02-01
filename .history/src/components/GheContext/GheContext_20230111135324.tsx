import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
    chooseList: string[];
    serChooseList:React.Dispatch<React.SetStateAction<string[]>> ;
}

export const GheContext = createContext<GheContextType | null |string>(null);

function GheContextProvider({ children }: GheContextProviderProp) {

  const [chooseList, setChooseList] = useState<string[] | string>([]);

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
