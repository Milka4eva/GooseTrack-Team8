const { useSelector } = require('react-redux');
const { Navigate, useLocation } = require('react-router-dom');
const { selectToken } = require('redux/auth/auth-selectors');

const PublicRoute = ({ children }) => {
  const userIsLoggedIn = useSelector(selectToken);
  const location = useLocation();

  return !userIsLoggedIn ? children : <Navigate to={location.state ?? '/'} />;
};

export default PublicRoute;