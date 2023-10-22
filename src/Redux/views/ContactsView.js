import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoading } from 'Redux/Contacts/selectors';
import { fetchContacts } from 'Redux/Contacts/contactsAPI';
import { AppContacts } from 'components/AppContacts';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function ContactsView() {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div style={barStyles}>
      <div>{isLoadingContacts && 'Please wait...'}</div>
      <AppContacts />
      {/* <Filter />
      <div>{isLoadingContacts && 'Please wait...'}</div>
      <h1>Contacts</h1>
      <ContactsList /> */}
    </div>
  );
}
