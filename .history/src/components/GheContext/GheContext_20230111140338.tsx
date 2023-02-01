import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
    chooseList: {}[] | null | undefined;
    setChooseList: React.Dispatch<React.SetStateAction<string[] | null | undefined >> ;
}

export const GheContext = createContext<GheContextType | null >(null);

function GheContextProvider({ children }: GheContextProviderProp) {

  const [chooseList, setChooseList] = useState<string[] | null | undefined >([]);

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
