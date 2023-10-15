import Forma from './Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter';
import { NavLink, Route, Routes } from 'react-router-dom';

import HomeView from '../views/HomeView';
import RegisterView from 'views/RegisterView';
// import RegisterView
// import LoginView
// import ContactsView

export const App = () => {
  return (
    // <Container>
    //   <AppBar />
    //   <Switch>
    <Routes>
      <Route exact path="/" component={HomeView} />
      <Route exact path="/register" component={RegisterView} />
      {/* <Route exact path="/login" component={LoginView} />
        <Route exact path="/contacts" component={ContactsView} /> */}
    </Routes>
    //   </Switch>
    // </Container>
    // <div>
    //   <h1>Phonebook</h1>
    //   <Forma />
    //   <h2>Contacts</h2>
    //   <Filter />
    //   <ContactsList />
    // </div>
  );
};
