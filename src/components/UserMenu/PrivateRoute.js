// import { useSelector } from 'react-redux';
// import { Route, redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const isFetchingUser = useSelector(authSelectors.getFetching);
  // const { isLoggedIn, isFetchingUser } = authSelectors;

  const shouldRedirect = !isFetchingUser && !isLoggedIn;
  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};

// export default function PrivateRoute({ children, ...routeProps }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   return (
//     <Route {...routeProps}>
//       {isLoggedIn ? children : <redirect to="/login" />}
//     </Route>
//   );
// }
