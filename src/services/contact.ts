import { createAsyncThunk } from '@reduxjs/toolkit';

export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount: number) => {
    // const response = await fetchCount(amount);
    // return response.data;
  }
);
