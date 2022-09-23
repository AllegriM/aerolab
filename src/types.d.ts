export interface ProductList {
  products: Array<{
    _id: string;
    name: string;
    cost: number;
    img: { hdUrl: string; url: string };
    category: string;
  }>;
}
export interface Product {
  _id: string;
  name: string;
  cost: number;
  img: { hdUrl: string; url: string };
  category: string;
}
