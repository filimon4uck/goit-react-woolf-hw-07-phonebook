export const handleFulfilledFetchContacts = (state, { payload }) => {
  state.contacts = payload;
  state.isLoading = false;
};
export const handleFulfilledDeleteContact = (state, { payload }) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(({ id }) => id !== payload);
};
export const handleFulfilledAddContact = (state, { payload }) => {
  state.isLoading = false;
  state.contacts.push(payload);
};
export const handlePending = (state, _) => {
  state.isLoading = true;
  state.error = null;
};
export const handleRejected = (state, { error }) => {
  state.error = error.message;
  state.isLoading = false;
};
