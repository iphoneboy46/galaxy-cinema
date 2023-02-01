import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
    chooseList: any;
    serChooseList:React.Dispatch<React.SetStateAction<string[] | null >> ;
}

export const GheContext = createContext<GheContextType | null | string>(null);

function GheContextProvider({ children }: GheContextProviderProp) {

  const [chooseList, setChooseList] = useState<string[] | null |string>([]);

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
