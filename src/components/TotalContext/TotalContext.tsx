import React, { createContext, useState } from 'react'


interface TotalContextProviderProps{
    children: React.ReactNode
}

interface TotalContextType{
    total:number | null
    setTotal: React.Dispatch<React.SetStateAction<number | null>>
}


export const TotalContext = createContext<TotalContextType | null>(null);

 


function TotalContextProvider({children}:TotalContextProviderProps) {

    const [total,setTotal] = useState<number | null>(null)
    console.log(total);

  return (
    <div>
        <TotalContext.Provider value={{total,setTotal}}>{children}</TotalContext.Provider>
    </div>
  )
}

export default TotalContextProvider