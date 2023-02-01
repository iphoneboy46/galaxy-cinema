import React, { createContext, useState } from "react";

interface UserContextProviderProps {
    children:React.ReactNode
}

interface UserContextType {
    user: any,
    setUser: any;
}

export const UserContext = createContext<any>(null);

function UserContextProvider({children}:UserContextProviderProps) {


    const [user,setUser] = useState<null>();
    console.log(user);

  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
