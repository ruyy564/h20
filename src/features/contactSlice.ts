import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from '../entities/contact';

export interface ContactState {
  count: number;
  contact: Contact[] | null;
  status: 'loading' | 'success' | 'error' | null;
}

const initialState: ContactState = {
  count: 0,
  contact: null,
  status: null,
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // builder
    //   .addCase(incrementAsync.pending, (state) => {
    //     state.status = 'loading';
    //   })
    //   .addCase(incrementAsync.fulfilled, (state, action) => {
    //     // state.status = 'idle';
    //     // state.value += action.payload;
    //   })
    //   .addCase(incrementAsync.rejected, (state) => {
    //     // state.status = 'failed';
    //   });
  },
});

// export const selectCount = (state: RootState) => state.counter.value;

export default contactSlice.reducer;
