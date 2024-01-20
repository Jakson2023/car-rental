import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
// import MainPage from 'pages/MainPage';
import { Route, Routes } from 'react-router-dom';
import Layout from './SharedLayout/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
};
