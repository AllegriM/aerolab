import { Product } from "./../types.d";
import { getProducts } from "./../services/getProducts";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [status, setStatus] = useState<"pending" | "resolved" | "reject">(
    "pending"
  );

  useEffect(() => {
    getProducts()
      .then((products) => setProducts(products))
      .catch(() => setStatus("reject"))
      .finally(() => setStatus("resolved"));
  }, []);

  return { products, status };
};

export default useProducts;
