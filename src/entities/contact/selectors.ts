import { RootState } from '../../store';

export const selectContacts = (state: RootState) => state.contact.contacts;
export const selectCount = (state: RootState) => state.contact.count;
export const selectStatus = (state: RootState) => state.contact.status;
export const selectErrorMessage = (state: RootState) =>
  state.contact.errorMessage;
