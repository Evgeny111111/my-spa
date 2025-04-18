// components/ProductList.tsx
import { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

// Тип для продукта
type Product = {
  id: number;
  title: string;
  imageUrl: string;
  liked: boolean;
};

// Тип для состояния в Redux store
type ProductState = {
  products: Product[];
  filter: 'all' | 'favorites'; // Пример фильтра
};

const ProductList: FC = () => {
  // Указываем тип состояния Redux
  const products = useSelector((state: { products: ProductState }) => state.products.products);
  const filter = useSelector((state: { products: ProductState }) => state.products.filter);

  // Фильтрация продуктов
  const filteredProducts = filter === 'favorites' ? products.filter((product) => product.liked) : products;

  return (
    <div>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
