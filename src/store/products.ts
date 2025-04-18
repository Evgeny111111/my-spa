// src/store/products.ts

import { create } from 'zustand';

export type Product = {
  id: number;
  title: string;
  imageUrl: string;
  liked: boolean;
};

type State = {
  products: Product[];
  addProduct: (product: Product) => void;
  toggleLike: (id: number) => void;
};

export const useProductStore = create<State>(set => ({
  products: [],
  addProduct: (product: Product) =>
    set(state => ({ products: [...state.products, product] })),
  toggleLike: (id: number) =>
    set(state => ({
      products: state.products.map(p =>
        p.id === id ? { ...p, liked: !p.liked } : p
      ),
    })),
}));
