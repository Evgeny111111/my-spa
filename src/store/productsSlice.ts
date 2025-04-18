// store/productsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Product = {
  id: number;
  title: string;
  imageUrl: string;
  liked: boolean;
};

type ProductsState = {
  products: Product[];
  filter: 'all' | 'favorites';
};

const initialState: ProductsState = {
  products: [],
  filter: 'all',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts(state, action: PayloadAction<Product[]>) {
      state.products = action.payload;
    },
    toggleLike(state, action: PayloadAction<number>) {
      const product = state.products.find((p) => p.id === action.payload);
      if (product) {
        product.liked = !product.liked;
      }
    },
    deleteProduct(state, action: PayloadAction<number>) {
      state.products = state.products.filter((p) => p.id !== action.payload);
    },
    setFilter(state, action: PayloadAction<'all' | 'favorites'>) {
      state.filter = action.payload;
    },
  },
});

export const { setProducts, toggleLike, deleteProduct, setFilter } = productsSlice.actions;
export default productsSlice.reducer;
