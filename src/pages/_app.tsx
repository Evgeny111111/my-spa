// src/pages/_app.tsx
import { AppProps } from 'next/app';  // Импортируем тип для компонента страницы
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const App: FC<AppProps> = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
