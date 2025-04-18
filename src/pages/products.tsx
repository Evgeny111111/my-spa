// pages/products.tsx
import { FC, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';
import { fetchProducts } from '../utils/api';

const ProductsPage: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();  // API запрос для получения данных
      dispatch(setProducts(products));
    };
    loadProducts();
  }, [dispatch]);

  return (
    <div>
      <Filter />
      <ProductList />
    </div>
  );
};

export default ProductsPage;
