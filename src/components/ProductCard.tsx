// components/ProductCard.tsx
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, deleteProduct } from '../store/productsSlice';
import { useRouter } from 'next/router';

type ProductCardProps = {
  product: {
    id: number;
    title: string;
    imageUrl: string;
    liked: boolean;
  };
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLike = () => {
    dispatch(toggleLike(product.id));
  };

  const handleDelete = () => {
    dispatch(deleteProduct(product.id));
  };

  const handleClick = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <div onClick={handleClick} style={{ cursor: 'pointer', height: '200px', padding: '10px', border: '1px solid #ccc' }}>
      <img src={product.imageUrl} alt={product.title} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
      <h3>{product.title}</h3>
      <button onClick={handleLike} style={{ color: product.liked ? 'red' : 'gray' }}>❤️</button>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
};

export default ProductCard;
