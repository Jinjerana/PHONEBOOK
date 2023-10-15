// import Forma from './Form';
// import ContactsList from './Contacts/Contacts';
// import Filter from './Filter';
import { Route, Routes } from 'react-router-dom';
import HomeView from 'Redux/views/HomeView';
import RegisterView from 'Redux/views/RegisterView';

// import RegisterView
// import LoginView
// import ContactsView

export const App = () => {
  return (
    // <Container>
    //   <AppBar />
    //   <Switch>
    <Routes>
      <Route exact path="/home" component={HomeView} />
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
