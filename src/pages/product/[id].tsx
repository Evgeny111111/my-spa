import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

// Тип продукта
type Product = {
  id: number;
  title: string;
  imageUrl: string;
  liked: boolean;
};

// Тип состояния Redux
type RootState = {
  products: {
    products: Product[];
  };
};

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = useSelector((state: RootState) =>
    state.products.products.find((p) => p.id === Number(id))
  );

  if (!product) {
    return <p>Загрузка или продукт не найден...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.title}</h1>
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{ width: '300px', height: '200px', objectFit: 'cover' }}
      />
      <p>ID: {product.id}</p>
      <p>Лайкнут: {product.liked ? '❤️ Да' : 'Нет'}</p>

      <Link href="/products">
        <button style={{ marginTop: '1rem' }}>← Назад к продуктам</button>
      </Link>
    </div>
  );
};

export default ProductPage;
