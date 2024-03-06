import { Navigate, Route, Routes } from 'react-router';
import { ROUTES } from './Constants/Routes';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import Inventory from './Pages/Inventory';
import MapPage from './Pages/Map/MapPage';

function PoEIdleGame() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.map} element={<MapPage />} />
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.page1} element={<Page1 />} />
      <Route path={ROUTES.inventory} element={<Inventory />} />
    </Routes>
  );
}

export default PoEIdleGame;
