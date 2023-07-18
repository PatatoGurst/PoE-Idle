import { Navigate, Route, Routes } from 'react-router';
import { ROUTES } from './Constants/Routes';
import HomePage from './Pages/HomePage';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';

type PoEIdleGameType = {
  value: number;
  updateIncrement: (v: number) => void;
};

function PoEIdleGame(props: PoEIdleGameType) {
  return (
    <Routes>
      <Route path='/' element={<Navigate to={ROUTES.home} />} />
      <Route
        path={ROUTES.home}
        element={<HomePage value={props.value} updateIncrement={() => props.updateIncrement(1)} />}
      />
      <Route
        path={ROUTES.page1}
        element={<Page1 updateIncrement={() => props.updateIncrement(2)} />}
      />
      <Route
        path={ROUTES.page2}
        element={<Page2 updateIncrement={() => props.updateIncrement(-5)} />}
      />
    </Routes>
  );
}

export default PoEIdleGame;
