import { Route, Routes } from 'react-router-dom';
import { HomePage } from '@pages/index';
import { HOME_ROUTER } from '@constants/routes';

export const RouterAllRoutes = () => {
  return (
    <main>
      <Routes>
        <Route path={HOME_ROUTER} element={<HomePage />} />
      </Routes>
    </main>
  );
};
