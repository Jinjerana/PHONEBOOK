import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingUser = useSelector(authSelectors.getFetching);

  const shouldRedirect = !isFetchingUser && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
