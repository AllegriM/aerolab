import { Product } from "./../types.d";
import { FETCH_URL } from "./getProducts";

export const requestRedeemProducts = async (product_id: Product["_id"]) => {
  const data = await fetch(`${FETCH_URL}/redeem`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
    body: JSON.stringify({ productId: product_id }),
  });
  const products = await data.json();
  return products;
};
