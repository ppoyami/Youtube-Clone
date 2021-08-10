import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import App from './App';
import Global from './styles/Global';
import theme from './styles/theme';
import rootContext from './context';
import store from './store';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <rootContext>
        <Provider store={store}>
          <App />
        </Provider>
      </rootContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
