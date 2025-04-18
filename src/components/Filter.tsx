// components/Filter.tsx
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../store/productsSlice';

const Filter: FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>Все</button>
      <button onClick={() => dispatch(setFilter('favorites'))}>Избранное</button>
    </div>
  );
};

export default Filter;
