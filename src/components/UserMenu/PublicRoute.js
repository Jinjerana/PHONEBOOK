// import { useSelector } from 'react-redux';
// import { Route, redirect } from 'react-router-dom';
import authSelectors from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = authSelectors;

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};

// export default function PublicRoute({
//   children,
//   restricted = false,
//   ...routeProps
// }) {
//   const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
//   const shouldRedirect = isLoggedIn && restricted;
//   return (
//     <Route {...routeProps}>
//       {shouldRedirect ? <redirect to="/home" /> : children}
//     </Route>
//   );
// }
