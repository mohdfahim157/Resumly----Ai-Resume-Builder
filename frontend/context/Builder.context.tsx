import React, { createContext, useContext, useState } from "react";

interface User {
  _id: string;
  username: string;
  email: string;
}

interface BuilderContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;

  loadingStatus: boolean;
  setLoadingStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export const BuilderContext = createContext<BuilderContextType | undefined>(
  undefined
);

export function useBuilder() {
  const context = useContext(BuilderContext);

  if (!context) {
    throw new Error("useBuilder must be used inside BuilderContextProvider");
  }

  return context;
}

export const BuilderContextProvider: React.FC<{
  children: React.ReactNode;  
}> = ({ children }) => {
const [user, setUser] = useState<User | null>(null);
const [loadingStatus, setLoadingStatus] = useState(false);

return (<BuilderContext.Provider
  value={{
    user,
    setUser,
    loadingStatus,
    setLoadingStatus,
  }}
>
  {children}
</BuilderContext.Provider>)
};
