// src/pages/product/[id].tsx
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Link from 'next/link';

const ProductPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const product = useSelector((state: any) =>
    state.products.products.find((p: any) => p.id === Number(id))
  );

  if (!product) {
    return <p>Загрузка или продукт не найден...</p>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} style={{ width: '300px', height: '200px', objectFit: 'cover' }} />
      <p>ID: {product.id}</p>
      <p>Лайкнут: {product.liked ? '❤️ Да' : 'Нет'}</p>

      <Link href="/products">
        <button style={{ marginTop: '1rem' }}>← Назад к продуктам</button>
      </Link>
    </div>
  );
};

export default ProductPage;
