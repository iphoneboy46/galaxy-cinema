import React, { createContext, useState } from 'react'


interface InfoContextProviderProps{
    children: React.ReactNode
}

interface InfoContextType{
    info:{} 
    setInfo: React.Dispatch<React.SetStateAction<{} | "">>
}


export const InfoContext = createContext<InfoContextType | "" | {}>("");



function InfoContextProvider({children}:InfoContextProviderProps) {

    const [info,setInfo] = useState<"" | {}>({})

  return (
    <div>
        <InfoContext.Provider value={{info,setInfo}}>{children}</InfoContext.Provider>
    </div>
  )
}

export default InfoContextProvider