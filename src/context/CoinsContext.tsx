import { Center, CircularProgress } from "@chakra-ui/react";
import { createContext, useContext, useEffect, useState } from "react";
import { getUserData } from "../services/getUserData";
import {
  CoinsContextProps,
  CoinsContextProviderProps,
  UserData,
} from "../types";

export const CoinsContext = createContext<CoinsContextProps | null>(null);

export const useCoinsContext = () => {
  const useCoinsContext = useContext(CoinsContext);
  return useCoinsContext;
};

function CoinsContextProvider({ children }: CoinsContextProviderProps) {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [status, setStatus] = useState<"pending" | "resolved" | "rejected">(
    "pending"
  );

  const spendCoinsToRedeem = (amount: number) => {
    if (!userData) return;
    setUserData({ ...userData, points: userData.points - amount });
  };

  const redeemCoins = (amount: number) => {
    if (!userData) return;
    setUserData({ ...userData, points: userData.points + amount });
  };

  useEffect(() => {
    getUserData()
      .then((data) => setUserData(data))
      .catch((error) => console.log(error))
      .finally(() => setStatus("resolved"));
  }, []);

  if (!userData || status === "pending") {
    return (
      <Center padding={12}>
        <CircularProgress isIndeterminate color="lightblue" />
      </Center>
    );
  }

  return (
    // value should have userData
    <CoinsContext.Provider
      value={{ userData, spendCoinsToRedeem, redeemCoins }}
    >
      {children}
    </CoinsContext.Provider>
  );
}

export default CoinsContextProvider;
