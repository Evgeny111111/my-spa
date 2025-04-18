// src/app/create-product/layout.tsx

import React from 'react';

const CreateProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Создание продукта</h1>
      {/* Здесь может быть меню или другие элементы, которые должны быть общими для этой страницы */}
      {children} {/* Отображение содержимого страницы */}
    </div>
  );
};

export default CreateProductLayout;
