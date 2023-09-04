import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';
import { lazy } from 'react';

const { useSelector } = require('react-redux');
const { Navigate, useLocation } = require('react-router-dom');
const { selectToken } = require('../../redux/auth/auth-selectors');
const MainLayout = lazy(() => import('../../pages/MainLayout'));

const PrivateRoute = () => {
  const userIsLoggedIn = useSelector(selectToken);
  const location = useLocation();

  if (!userIsLoggedIn) {
    return <Navigate to="/login" state={location} />;
  }
  return (
    <Suspense fallback={<Loader />}>
      <MainLayout />
    </Suspense>
  );
};

export default PrivateRoute;
