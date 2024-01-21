import CatalogPage from 'pages/CatalogPage';
import FavoritesPage from 'pages/FavoritesPage';
import MainPage from 'pages/MainPage';
import { Link, Route, Routes } from 'react-router-dom';
import Layout from './SharedLayout/Layout';
import { useSelector } from 'react-redux';

export const App = () => {
  const favorites = useSelector(state => state.adverts.favorites);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/favorites"
          element={
            favorites.length > 0 ? (
              <FavoritesPage to="/catalog" />
            ) : (
              <Link to="/catalog">
                <CatalogPage />
              </Link>
            )
          }
        />
        ;
      </Route>
    </Routes>
  );
};
