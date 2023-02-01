import React, { createContext, useState } from "react";

interface ComboContextProviderProps {
  children: React.ReactNode;
}

interface VeContextType {
  comboList: {
    comboBig1?: number;
    comboBig2?: number;
    comboBig1Ex?: number;
    comboBig2Ex?: number;
  } | null;
  setComboList: React.Dispatch<
    React.SetStateAction<{
      comboBig1?: number;
      comboBig2?: number;
      comboBig1Ex?: number;
      comboBig2Ex?: number;
    } | null>
  >;
}

export const VeContext = createContext<ComboContextType | null>(null);

function VeContextProvider({ children }: ComboContextProviderProps) {
  const [veList, setVeList] = useState<{
    comboBig1?:number,
    comboBig2?:number,
    comboBig1Ex?: number ,
    comboBig2Ex?: number ,
  } | null>(null);
  console.log(comboList);
  return (
    <div>
      <VeContext.Provider value={{ veList, setVeList }}>
        {children}
      </VeContext.Provider>
    </div>
  );
}

export default VeContextProvider;
