import React, { createContext, useState } from 'react'


interface InfoContextProviderProps{
    children: React.ReactNode
}

interface InfoContextType{
    info:{} | null;
    setInfo:
}


export const InfoContext = createContext<InfoContextType | null>(null);



function InfoContextProvider({children}:InfoContextProviderProps) {

    const [info,setInfo] = useState<null | InfoContextType>(null)

  return (
    <div>
        <InfoContext.Provider value={{info,setInfo}}>{children}</InfoContext.Provider>
    </div>
  )
}

export default InfoContextProvider