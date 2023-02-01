import React, { createContext, useState } from 'react'


interface InfoContextProviderProps{
    children: React.ReactNode
}

interface InfoContextType{
    info:any
    setInfo: React.Dispatch<React.SetStateAction<any>>
}


export const InfoContext = createContext<InfoContextType | any>("");



function InfoContextProvider({children}:InfoContextProviderProps) {

    const [info,setInfo] = useState<any>()

  return (
    <div>
        <InfoContext.Provider value={{info,setInfo}}>{children}</InfoContext.Provider>
    </div>
  )
}

export default InfoContextProvider