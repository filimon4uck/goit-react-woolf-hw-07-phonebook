import ContactItem from 'components/Contact_Item/Contact_Item';
import Loader from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContactsThunk } from 'store/contacts/thunks';
import {
  selectError,
  selectfilteredContacts,
  selectisLoading,
} from 'store/selectors/selectors';
import style from './Contacts_list.module.css';
const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectfilteredContacts);
  const isLoading = useSelector(selectisLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {filteredContacts.length > 0 && (
        <ul className={style.contacts_list}>
          {filteredContacts.map(({ name, number, id }) => (
            <ContactItem key={id} name={name} number={number} id={id} />
          ))}
        </ul>
      )}
    </>
  );
};
export default ContactsList;
