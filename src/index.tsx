import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import ExcelSheet from './components/ExcelSheet/ExcelSheet';
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ExcelSheet />
    </Provider>,
  </React.StrictMode>
);
