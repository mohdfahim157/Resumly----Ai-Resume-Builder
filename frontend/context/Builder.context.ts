import { createContext, useContext } from "react";

interface BuilderData {
  theme: string;
}


interface BuilderContextType {
  data: BuilderData;
  setData: React.Dispatch<React.SetStateAction<BuilderData>>;
}


export const BuilderContext = createContext<BuilderContextType | undefined>(undefined);

export const BuilderContextProvider = BuilderContext.Provider;

export function useBuilder() {
  const context = useContext(BuilderContext);

  if (!context) {
    throw new Error("useBuilder must be used inside BuilderContextProvider");
  }

  return context;
}