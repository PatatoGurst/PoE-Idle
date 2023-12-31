import { Navigate, Route, Routes } from 'react-router';
import { ROUTES } from './Constants/Routes';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import MapPage from './Pages/Map/MapPage';

function PoEIdleGame() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.map} element={<MapPage />} />
      <Route path={ROUTES.home} element={<HomePage />} />
      <Route path={ROUTES.page1} element={<Page1 />} />
      <Route path={ROUTES.page2} element={<Page2 />} />
    </Routes>
  );
}

export default PoEIdleGame;
