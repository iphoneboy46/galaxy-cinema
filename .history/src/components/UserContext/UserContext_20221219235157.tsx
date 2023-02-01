import React, { createContext, useState } from "react";

interface UserContextProviderProps {
    children:React.ReactNode
}

interface UserContextType {
    account: any,
    setAccount: any;
}

export const UserContext = createContext<any| UserContextType>("");

function UserContextProvider({children}:UserContextProviderProps) {


    const [account,setAccount] = useState<any>();

    console.log(account);

  return (
    <div>
      <UserContext.Provider value={{account,setAccount}}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
