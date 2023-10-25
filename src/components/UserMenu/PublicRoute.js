import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
