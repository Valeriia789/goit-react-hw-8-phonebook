export const selectContacts = state => state.contacts;
export const selectFilter = state => state.filter;
// export const selectIsLoading = state => state.contacts.isLoading;
// export const selectError = state => state.contacts.error;

export const getContacts = state => state.contacts.items;
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.filter;
export const selectLoading = state => state.contacts.loading;
// export const selectFilter = state => state.contacts.filter;
export const selectAllContacts = state => state.contacts.items;
