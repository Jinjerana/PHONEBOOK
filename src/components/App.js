// import Forma from './Form';
// import ContactsList from './Contacts/Contacts';
// import Filter from './Filter';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'Redux/views/HomeView';
import RegisterView from 'Redux/views/RegisterView';
import { Layout } from './Layout';
import LoginView from 'Redux/views/LoginView';
import AppBar from './AppBar';
import ContactsView from 'Redux/views/ContactsView';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import authOperations from '../Redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route exact path="/home" element={<HomeView />} />
          <Route exact path="/register" element={<RegisterView />} />
          <Route exact path="/login" element={<LoginView />} />
          <Route exact path="/contacts" component={<ContactsView />} />
        </Route>
      </Routes>
    </div>
    // <div>
    //   <h1>Phonebook</h1>
    //   <Forma />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactsList />
    // </div>
  );
};
