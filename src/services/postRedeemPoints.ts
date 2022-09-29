import { FETCH_URL } from "./getProducts";

export const requestPoints = async (coinsAmount: number) => {
  const data = await fetch(`${FETCH_URL}/user/points`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
    body: JSON.stringify({ amount: coinsAmount }),
  });
  const redeemCoins = await data.json();
  return redeemCoins;
};
