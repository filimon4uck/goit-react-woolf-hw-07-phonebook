import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAll, removeContact, addContact } from 'api_contacts/contacts';
export const fetchContactsThunk = createAsyncThunk('contacts/fetchAll', () =>
  fetchAll()
);
export const deleteContactThunk = createAsyncThunk(
  'contacts/deleteContact',
  id => removeContact(id)
);
export const addContactThunk = createAsyncThunk(
  'contacts/addContact',
  contact => addContact(contact)
);
