import React, { createContext, useState } from 'react'


interface TotalContextProviderProps{
    children: React.ReactNode
}

interface TotalContextType{
    total:any
    setTotal: React.Dispatch<React.SetStateAction<any>>
}


export const TotalContext = createContext<TotalContextType | any>("");



function TotalContextProvider({children}:TotalContextProviderProps) {

    const [total,setTotal] = useState<any>()

  return (
    <div>
        <TotalContext.Provider value={{Total,setTotal}}>{children}</TotalContext.Provider>
    </div>
  )
}

export default TotalContextProvider