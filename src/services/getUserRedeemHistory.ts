import { FETCH_URL } from "./getProducts";

export const getUserRedeemHistory = async () => {
  const data = await fetch(`${FETCH_URL}/user/history`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  });
  const redeemHistory = await data.json();
  return redeemHistory;
};
