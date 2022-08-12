import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import style from './ContactList.module.scss';
import { useGetContactsQuery } from 'redux/contactsSlice';

const ContactList = () => {
  const { data: contacts, error, isLoading } = useGetContactsQuery();

  const filter = useSelector(state => state.filter.value);

  const getFilteredContacts = () => {
    const normalizeFilter = filter.toLowerCase().trim();

    return contacts?.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleContacts = getFilteredContacts();

  return (
    <>
      {isLoading && <div className={style.list}>Loading...</div>}

      {contacts && (
        <ul className={style.list}>
          {visibleContacts.length !== 0 ? (
            visibleContacts.map(contact => {
              return <ContactItem key={contact.id} contact={contact} />;
            })
          ) : (
            <li className={style.error}>Not found name</li>
          )}
        </ul>
      )}

      {error && <p>Ups, something was wrong! Reload page, please</p>}
    </>
  );
};

export default ContactList;
