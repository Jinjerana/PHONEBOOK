import Forma from './Form/Form';
import ContactsList from './Contacts/Contacts';
import Filter from './Filter/Filter';

export const AppContacts = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <Forma />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
    </div>
  );
};
