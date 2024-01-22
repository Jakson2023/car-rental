import React from 'react';
import Catalog from '../components/Catalog/Catalog';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CatalogPage = () => {
  return (
    <div>
      <Catalog />
      <ToastContainer />
    </div>
  );
};

export default CatalogPage;
