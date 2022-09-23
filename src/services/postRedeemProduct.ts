import { FETCH_URL } from "./getProducts";

export const requestRedeemProducts = async () => {
  const data = await fetch(`${FETCH_URL}/user/points`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  });
  const products = await data.json();
  return products;
};
