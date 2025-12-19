
export interface Product {
  id: number;
  name: string;
  shortDescription: string;
  price: number;
  image: string;
  category: Category;
  longDescription: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export type Category = 'Hambúrguer' | 'Massas' | 'Saladas';
