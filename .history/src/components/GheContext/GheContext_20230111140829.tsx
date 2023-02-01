import React, { createContext, useState } from "react";

interface GheContextProviderProp {
  children: React.ReactNode;
}

interface GheContextType {
  chooseList: {}[] | null | string;
  setChooseList: React.Dispatch<React.SetStateAction<{}[] | null | string>>;
}

export const GheContext = createContext<GheContextType | null | string>("");

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
