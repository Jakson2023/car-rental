import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { BrowserRouter } from "react-router-dom";

import { Provider } from 'react-redux';
import store, { persistor  } from './redux/store';
import { GeneralStyles } from './common/GeneralStyles';
import { App } from 'components/App';
import { PersistGate } from 'redux-persist/integration/react';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Provider store={store}>
    <BrowserRouter basename='/car-rental' >
    <GeneralStyles/>
    <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

//  basename='/car-rental'
