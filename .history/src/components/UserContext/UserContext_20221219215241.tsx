import React, { createContext } from "react";

interface UserContextProviderProps {
    children:React.ReactNode
}

export const UserContext = createContext(null);

function UserContextProvider({children}:UserContextProviderProps) {
  return (
    <div>
      <UserContext.Provider value={user,setUser}>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
