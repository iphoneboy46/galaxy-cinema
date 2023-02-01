import React, { createContext, useState } from "react";

interface UserContextProviderProps {
    children:React.ReactNode
}

export const UserContext = createContext(null);

function UserContextProvider({children}:UserContextProviderProps) {


    const [user,setUser] = useState<string | null>("");

  return (
    <div>
      <UserContext.Provider value={}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
