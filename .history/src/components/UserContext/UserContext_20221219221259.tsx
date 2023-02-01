import React, { createContext, useState } from "react";

interface UserContextProviderProps {
    children:React.ReactNode
}

interface UserContextType {
    account: any,
    setAccount: any;
}

export const UserContext = createContext<any| UserContextType>(null);

function UserContextProvider({children}:UserContextProviderProps) {


    const [user,setUser] = useState<null>(null);


  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;