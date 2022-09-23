import { FETCH_URL } from "./getProducts";

export const getUserData = async () => {
  const data = await fetch(`${FETCH_URL}/user/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: import.meta.env.VITE_API_TOKEN,
    },
  });
  const userData = await data.json();
  return userData;
};
