import { contactsReducer } from 'store/contacts/contactsSlice';
import { filterReducer } from 'store/filter/filterSlice';

export const reducer = {
  contacts: contactsReducer,
  filter: filterReducer,
};
