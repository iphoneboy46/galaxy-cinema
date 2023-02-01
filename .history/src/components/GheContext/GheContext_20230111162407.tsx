import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
  chooseList?: string[];
  setChooseList?: React.Dispatch<React.SetStateAction<any>> ;
}

export const GheContext = createContext<GheContextType | null >(null);

function GheContextProvider({ children }: GheContextProviderProp) {
  const [chooseList, setChooseList] = useState<any>([]);

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
