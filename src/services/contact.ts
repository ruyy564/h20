import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';

import $api from '../http';
import { Contact } from '../entities/contact';

type FetchContactsParams = {
  page: number;
  limit: number;
  sort: string;
  order: string;
  q?: string;
};

export type FetchData = {
  contacts: Contact[];
  count: number;
};

export type UpdateDate = {
  contacts: Contact[];
};

export const fetchContacts = createAsyncThunk<
  FetchData,
  FetchContactsParams,
  {
    rejectValue: any;
  }
>(
  'contact/fetchContacts',
  async ({ page, limit, sort, order, q }, thunkAPI) => {
    try {
      const response = await $api.get<Contact[]>('/employees', {
        params: {
          q,
          _page: page,
          _limit: limit,
          _sort: sort,
          _order: order,
        },
      });
      const count = Number(response.headers['x-total-count']);

      return {
        count,
        contacts: response.data,
      };
    } catch (e) {
      const error = e as AxiosError<{ message: string }>;

      return thunkAPI.rejectWithValue(error.response?.data.message);
    }
  }
);

export const updateContacts = createAsyncThunk<
  UpdateDate,
  UpdateDate,
  {
    rejectValue: any;
  }
>('contact/updateContacts', async ({ contacts }, thunkAPI) => {
  try {
    const response = await Promise.all(
      contacts.map(async (item) => {
        const contact = await $api.put<Contact>(`/employees/${item.id}`, {
          ...item,
        });

        return contact.data;
      })
    );

    return {
      contacts: response,
    };
  } catch (e) {
    const error = e as AxiosError<{ message: string }>;

    return thunkAPI.rejectWithValue(error.response?.data.message);
  }
});
