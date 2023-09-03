import Loader from 'components/Loader/Loader';
import { Suspense } from 'react';

const { useSelector } = require('react-redux');
const { Navigate, Outlet, useLocation } = require('react-router-dom');
const { selectToken } = require('redux/auth/auth-selectors');

const PublicRoute = () => {
  const userIsLoggedIn = useSelector(selectToken);
  const location = useLocation();

  if (userIsLoggedIn) {
    return <Navigate to={location.state ?? '/calendar'} />;
  }

  return (
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  );
};

export default PublicRoute;
