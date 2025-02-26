import { Route, Routes } from 'react-router';
import { ROUTES } from './Constants/Routes';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import InventoryPage from './Pages/Inventory/InventoryPage';
import MapPage from './Pages/Map/MapPage';
import OptionsPage from './Pages/OptionsPage';

function PoEIdleGame() {
  return (
    <Routes>
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.map} element={<MapPage />} />
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.page1} element={<Page1 />} />
      <Route path={ROUTES.inventory} element={<InventoryPage />} />
      <Route path={ROUTES.options} element={<OptionsPage />} />
    </Routes>
  );
}

export default PoEIdleGame;
