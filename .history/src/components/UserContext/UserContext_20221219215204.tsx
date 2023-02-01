import React, { createContext } from "react";

export const UserContext = createContext(null);

function UserContextProvider({children}:UserContextProviderProps) {
  return (
    <div>
      <UserContext.Provider>{children}</UserContext.Provider>
    </div>
  );
}

export default UserContextProvider;
