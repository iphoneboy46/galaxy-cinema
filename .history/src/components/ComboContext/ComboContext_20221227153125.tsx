import React, { createContext, useState } from "react";

interface ComboContextProviderProps {
  children: React.ReactNode;
}

interface ComboContextType {
    comboList:  number | null,
    setComboList:React.Dispatch<React.SetStateAction<number>>
}

export const ComboContext = createContext<ComboContextType | null>(null);

function ComboContextProvider({ children }: ComboContextProviderProps) {
  const [comboList, setComboList] = useState<null | string>("");
  console.log(comboList);
  return (
    <div>
      <ComboContext.Provider value={{ comboList, setComboList }}>
        {children}
      </ComboContext.Provider>
    </div>
  );
}

export default ComboContextProvider;
