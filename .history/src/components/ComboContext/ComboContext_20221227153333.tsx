import React, { createContext, useState } from "react";

interface ComboContextProviderProps {
  children: React.ReactNode;
}

interface ComboContextType {
    comboList:  {
      comboBig1?:number,
      comboBig2?:number,
      comboBig1Ex?: number ,
      comboBig2Ex?: number ,
    } | null,
    setComboList:React.Dispatch<React.SetStateAction<number|null>>
}

export const ComboContext = createContext<ComboContextType | null>(null);

function ComboContextProvider({ children }: ComboContextProviderProps) {
  const [comboList, setComboList] = useState<any>(0);
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
