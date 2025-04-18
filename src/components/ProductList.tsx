// components/ProductList.tsx
import { FC } from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductList: FC = () => {
  const products = useSelector((state: any) => state.products.products);
  const filter = useSelector((state: any) => state.products.filter);

  const filteredProducts = filter === 'favorites' ? products.filter((product: any) => product.liked) : products;

  return (
    <div>
      {filteredProducts.map((product: any) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
