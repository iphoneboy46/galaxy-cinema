import React, { createContext, useState } from "react";

interface UserContextProviderProps {
    children:React.ReactNode
}

interface UserContextType {
    user: any,
    setUser: React.Dispatch<React.SetStateAction<string | null>>;
}

export const UserContext = createContext<UserContextType|null>(null);

function UserContextProvider({children}:UserContextProviderProps) {


    const [user,setUser] = useState<null>();

  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
