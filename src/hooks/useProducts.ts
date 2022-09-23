import { Product } from "./../types.d";
import { getProducts } from "./../services/getProducts";
import { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then((products) => setProducts(products));
  }, []);

  return products;
};

export default useProducts;
