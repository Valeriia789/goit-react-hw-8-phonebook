import { ContactsEditorForm } from '../components/ContactsEditorForm/ContactsEditorForm';
import { Filter } from '../components/Filter/Filter';
import { ContactsList } from '../components/ContactList/ContactsList';

const ContactsView = () => {
  return (
    <>
      <ContactsEditorForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default ContactsView;
