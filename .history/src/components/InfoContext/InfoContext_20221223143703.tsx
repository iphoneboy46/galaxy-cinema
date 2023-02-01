import React, { createContext } from 'react'
import useState from 'react';

interface InfoContextProviderProps{

}


export const InfoContext = createContext([]);



function InfoContextProvider({children}:InfoContextProviderProps) {

    const [info,setInfo] = useState<null>(null)

  return (
    <div>

    </div>
  )
}

export default InfoContextProvider