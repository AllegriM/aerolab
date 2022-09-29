import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../services/getUserData";
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
  const [userData, setUserData] = useState<UserData | null>(null);
  useEffect(() => {
    getUserData().then((data) => setUserData(data));
  }, []);

  return (
    // value should have userData
    <CoinsContext.Provider value={userData}>{children}</CoinsContext.Provider>
  );
}

export default CoinsContextProvider;
