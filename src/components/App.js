import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, lazy, Suspense } from 'react';

// import HomeView from 'Redux/views/HomeView';
// import RegisterView from 'Redux/views/RegisterView';
// import LoginView from 'Redux/views/LoginView';
// import ContactsView from 'Redux/views/ContactsView';
import AppBar from './UserMenu/AppBar';
import authOperations from '../Redux/auth/auth-operations';
import authSelectors from 'Redux/auth/auth-selectors';
import { PrivateRoute } from './UserMenu/PrivateRoute';
import { PublicRoute } from './UserMenu/PublicRoute';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingUser = useSelector(authSelectors.getFetching);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingUser && (
      <Suspense>
        <AppBar />

        <Routes>
          {/* <Route path="/" element={<PublicRoute component={HomeView} />} /> */}
          <Route path="/" element={<HomeView />} />

          <Route
            path="/register"
            element={
              <PublicRoute component={RegisterView} redirectTo="/contacts" />
            }
            restricted
          />

          <Route
            path="/login"
            element={
              <PublicRoute component={LoginView} redirectTo="/contacts" />
            }
            restricted
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute component={ContactsView} redirectTo="/login" />
            }
          />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    )
  );
};
