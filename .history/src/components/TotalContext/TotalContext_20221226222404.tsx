import React, { createContext, useState } from 'react'


interface TotalContextProviderProps{
    children: React.ReactNode
}

interface TotalContextType{
    total:{
      totalTong1: number,
      totalTong2: number
    }
    setTotal: React.Dispatch<React.SetStateAction<any>>
}


export const TotalContext = createContext<TotalContextType | any>("");



function TotalContextProvider({children}:TotalContextProviderProps) {

    const [total,setTotal] = useState<>()

  return (
    <div>
        <TotalContext.Provider value={{total,setTotal}}>{children}</TotalContext.Provider>
    </div>
  )
}

export default TotalContextProvider