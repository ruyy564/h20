import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { fetchContacts, type FetchData } from '../services/contact';
import { Contact } from '../entities/contact';
import { STATUS } from '../constants';

export interface ContactState {
  count: number;
  contacts: Contact[] | null;
  status: STATUS | null;
  errorMessage: string | null;
}

const initialState: ContactState = {
  count: 0,
  contacts: null,
  status: null,
  errorMessage: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = STATUS.LOADING;
        state.errorMessage = null;
      })
      .addCase(
        fetchContacts.fulfilled,
        (state, { payload }: PayloadAction<FetchData>) => {
          state.status = STATUS.SUCCESS;
          state.count = payload.count;
          state.contacts = payload.contacts;
        }
      )
      .addCase(
        fetchContacts.rejected,
        (state, { payload }: PayloadAction<string>) => {
          state.status = STATUS.ERROR;
          state.errorMessage = payload;
        }
      );
  },
});

// export const selectCount = (state: RootState) => state.counter.value;

export default contactSlice.reducer;
