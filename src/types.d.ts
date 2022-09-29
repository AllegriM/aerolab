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

export interface UserData {
  createData: string;
  name: string;
  points: number;
  redeemHistory: [];
  __v: number;
  __id: string;
}

export interface CoinsRedeemProps {
  coins: number;
  setCoins: React.Dispatch<React.SetStateAction<number>>;
}
