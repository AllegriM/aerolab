import { createContext, useContext } from "react";
import useUserData from "../hooks/useUserData";
import { UserData } from "../types";

interface CoinsContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const CoinsContext = createContext<UserData | null>(null);

export const useCoinsContext = () => {
  const useCoinsContext = useContext(CoinsContext);
  return useCoinsContext;
};

function CoinsContextProvider({ children }: CoinsContextProviderProps) {
  const userData = useUserData();

  return (
    // value should have userData
    <CoinsContext.Provider value={userData}>{children}</CoinsContext.Provider>
  );
}

export default CoinsContextProvider;
