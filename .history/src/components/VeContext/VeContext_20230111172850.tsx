import React, { createContext, useState } from "react";

interface VeContextProviderProps {
  children: React.ReactNode;
}

interface VeContextType {
  veList: {
    quantity2D?: number;
    quantity2DTV?: number;
    quantity2DGD?: number;
    quantity2DGDTV?: number;
    quantity2DGDHD?:number;
    totalGheTong?: number;
  } | null;
  setVeList: React.Dispatch<
    React.SetStateAction<{
      quantity2D?: number;
      quantity2DTV?: number;
      quantity2DGD?: number;
      quantity2DGDTV?: number;
    } | null>
  >;
}

export const VeContext = createContext<VeContextType | null>(null);

function VeContextProvider({ children }: VeContextProviderProps) {
  const [veList, setVeList] = useState<{
    quantity2D?: number;
    quantity2DTV?: number;
    quantity2DGD?: number;
    quantity2DGDTV?: number;
    quantity2DGDHD?:number;
    totalGheTong?: number;
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
