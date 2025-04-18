// src/app/create-product/page.tsx

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useProductStore } from '@/store/products';

export default function CreateProductPage() {
  const [title, setTitle] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState('');
  const addProduct = useProductStore(state => state.addProduct);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !imageUrl.trim()) {
      setError('Все поля обязательны');
      return;
    }

    const newProduct = {
      id: Date.now(),
      title,
      imageUrl,
      liked: false,
    };

    addProduct(newProduct);
    router.push('/products');
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Создание продукта</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Название продукта</label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Например, MacBook"
          />
        </div>
        <div>
          <label className="block mb-1 font-medium">URL изображения</label>
          <input
            type="text"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="https://..."
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Создать продукт
        </button>
      </form>
    </div>
  );
}
