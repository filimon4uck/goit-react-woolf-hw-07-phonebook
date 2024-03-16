import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './thunks';
import {
  handleFulfilledDeleteContact,
  handleFulfilledFetchContacts,
  handleFulfilledAddContact,
  handlePending,
  handleRejected,
} from './handlers';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.pending, handlePending)
      .addCase(fetchContactsThunk.fulfilled, handleFulfilledFetchContacts)
      .addCase(fetchContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(addContactThunk.fulfilled, handleFulfilledAddContact)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(deleteContactThunk.pending, handlePending)
      .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContact)
      .addCase(deleteContactThunk.rejected, handleRejected);
  },
});
export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
