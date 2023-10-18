import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectVisibleContacts } from 'Redux/Contacts/selectors';

import { List, Item, Button } from './ContactsStyled';
import { fetchContacts, deleteContact } from 'Redux/Contacts/contactsAPI';

const ContactsList = () => {
  const filteredContacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <List>
      {filteredContacts.map(({ name, phone, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{phone}:</span>

            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactsList;
