import React, { createContext, useState, ReactNode, useContext } from "react";

// 3. Membuat context dengan nilai default
export const AuthContext = createContext<any>(undefined);


export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
