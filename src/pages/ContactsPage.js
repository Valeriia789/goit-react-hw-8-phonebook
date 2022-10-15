import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactsEditorForm } from '../components/ContactsEditorForm/ContactsEditorForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactList/ContactsList';

import { fetchContacts } from '../redux/contacts/operations';
import { selectLoading } from '../redux/contacts/selectors';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>{isLoading && 'Request in progress...'}</div>
      <ContactsEditorForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsPage;
