import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
  chooseList: {}[] | null | string | undefined;
  setChooseList: React.Dispatch<React.SetStateAction<{}[] | null | string | undefined>>;
}

export const GheContext = createContext<GheContextType | null >(null);

function GheContextProvider({ children }: GheContextProviderProp) {
  const [chooseList, setChooseList] = useState<{}[] | null | string>([]);

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
