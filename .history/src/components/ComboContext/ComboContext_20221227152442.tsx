import React, { createContext, useState } from "react";

interface ComboContextProviderProps {
  children: React.ReactNode;
}

interface ComboContextType {
    comboList: number | {} |string,
    setComboList:React.Dispatch<React.SetStateAction<number|{}|string>>
}

export const ComboContext = createContext<ComboContextType | null | string>(null);

function ComboContextProvider({ children }: ComboContextProviderProps) {
  const [comboList, setComboList] = useState<number| {} | string>(0);
  
  return (
    <div>
      <ComboContext.Provider value={{ comboList, setComboList }}>
        {children}
      </ComboContext.Provider>
    </div>
  );
}

export default ComboContextProvider;
