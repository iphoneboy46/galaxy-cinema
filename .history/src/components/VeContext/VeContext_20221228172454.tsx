import React, { createContext, useState } from "react";

interface ComboContextProviderProps {
  children: React.ReactNode;
}

interface VeContextType {
  veList: {
    quantity2D?: number;
    quantity2DTV?: number;
    quantity2DGD?: number;
    quantity2DGDTV?: number;
  } | null;
  setComboList: React.Dispatch<
    React.SetStateAction<{
      quantity2D?: number;
      quantity2DTV?: number;
      quantity2DGD?: number;
      quantity2DGDTV?: number;
    } | null>
  >;
}

export const VeContext = createContext<VeContextType | null>(null);

function VeContextProvider({ children }: ComboContextProviderProps) {
  const [veList, setVeList] = useState<{
    comboBig1?: number;
    comboBig2?: number;
    comboBig1Ex?: number;
    comboBig2Ex?: number;
  } | null>(null);

  return (
    <div>
      <VeContext.Provider value={{ veList, setVeList }}>
        {children}
      </VeContext.Provider>
    </div>
  );
}

export default VeContextProvider;
