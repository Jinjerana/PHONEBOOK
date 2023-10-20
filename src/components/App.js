import { Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';
import { Layout } from './Layout';
import HomeView from 'Redux/views/HomeView';
import RegisterView from 'Redux/views/RegisterView';
import LoginView from 'Redux/views/LoginView';
import ContactsView from 'Redux/views/ContactsView';
import AppBar from './UserMenu/AppBar';
import authOperations from '../Redux/auth/auth-operations';
import authSelectors from 'Redux/auth/auth-selectors';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { PublicRoute } from './UserMenu/PublicRoute';

// const HomeView = lazy(() => import('../Redux/views/HomeView'));
// const RegisterView = lazy(() => import('../Redux/views/RegisterView'));
// const LoginView = lazy(() => import('../Redux/views/LoginView'));
// const ContactsView = lazy(() => import('../Redux/views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    isFetchingUser && (
      <div>
        <AppBar />
        {/* <Suspense fallback={<p>Loading...</p>}> */}
        <Routes>
          {/* <Route path="/" element={<Layout />}> */}
          <Route path="/" element={<HomeView />} />

          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterView} redirectTo="/home" />
            }
            restricted
          />

          <Route
            path="/login"
            element={<PublicRoute component={LoginView} redirectTo="/home" />}
            restricted
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsView} redirectTo="/login" />
            }
          />
          {/* </Route> */}
        </Routes>
        {/* </Suspense> */}
      </div>
    )
  );
};
