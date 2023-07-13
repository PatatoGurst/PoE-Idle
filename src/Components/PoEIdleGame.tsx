import { Navigate, Route, Routes } from 'react-router';
import { ROUTES } from './Constants/Routes';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

function PoEIdleGame(props: { value: number }) {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.home} element={<HomePage value={props.value} />} />
      <Route path={ROUTES.page1} element={<Page1 />} />
      <Route path={ROUTES.page2} element={<Page2 />} />
    </Routes>
  );
}

export default PoEIdleGame;
