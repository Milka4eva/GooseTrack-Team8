import { useSelector } from 'react-redux';

import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
  selectToken,
} from '../redux/auth/auth-selectors';

const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isRefreshing = useSelector(selectIsRefreshing);
  const userToken = useSelector(selectToken);

  return {
    isLoggedIn,
    user,
    isRefreshing,
    userToken,
  };
};
export default useAuth;