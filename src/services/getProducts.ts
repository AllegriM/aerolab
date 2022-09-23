export const FETCH_URL = "https://coding-challenge-api.aerolab.co";

export const getProducts = async () => {
  const data = await fetch(`${FETCH_URL}/products`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  });
  const products = await data.json();
  return products;
};
