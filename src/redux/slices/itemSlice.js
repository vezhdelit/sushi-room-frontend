import axios from '../../middleware/axios';

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchItems = createAsyncThunk(
  'fetch/fetchItemsStatus',
  async ({ category, order, sort, search }) => {
    const response = await axios.get(`/items?${category}${sort}${order}${search}`);
    return response.data;
  },
);

export const fetchItemById = createAsyncThunk('fetch/fetchItemByIdStatus', async (_id) => {
  const response = await axios.get(`items/${_id}`);
  return response.data;
});

const initialState = {
  status: 'pending',
  items: [],
  itemById: {},
};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = 'pending';
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.items = [];
      state.status = 'error';
    });

    ////////////////////////////////////////////////////////////////

    builder.addCase(fetchItemById.pending, (state, action) => {
      state.status = 'pending';
      state.itemById = {};
    });
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.status = 'success';
      state.itemById = action.payload;
    });
    builder.addCase(fetchItemById.rejected, (state, action) => {
      state.status = 'error';
      state.itemById = {};
    });
  },
});

export default itemSlice.reducer;
