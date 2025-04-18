// src/pages/index.tsx
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Добро пожаловать 👋</h1>
      <p>
        Перейти к <Link href="/products">списку продуктов</Link>
      </p>
    </div>
  );
}
