import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
