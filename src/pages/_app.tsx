// pages/_app.tsx
import { FC } from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const App: FC = ({ Component, pageProps }) => (
  <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
);

export default App;
