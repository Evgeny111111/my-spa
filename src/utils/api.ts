// src/utils/api.ts

export const fetchProducts = async () => {
    // Временные "фейковые" данные
    return [
      {
        id: 1,
        title: 'Ноутбук Asus',
        imageUrl: 'https://via.placeholder.com/300x200?text=Asus+Laptop',
        liked: false,
      },
      {
        id: 2,
        title: 'Смартфон Samsung',
        imageUrl: 'https://via.placeholder.com/300x200?text=Samsung+Phone',
        liked: false,
      },
      {
        id: 3,
        title: 'Наушники Sony',
        imageUrl: 'https://via.placeholder.com/300x200?text=Sony+Headphones',
        liked: false,
      },
    ];
  };
  