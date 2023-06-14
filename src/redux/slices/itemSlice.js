import axios from "../../middleware/axios";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItems = createAsyncThunk(
  "fetch/fetchItemsStatus",
  async ({ category, order, sort, search }) => {
    const response = await axios.get(
      `/items?${category}${sort}${order}${search}`
    );
    return response.data;
  }
);

export const fetchItemById = createAsyncThunk(
  "fetch/fetchItemByIdStatus",
  async (_id) => {
    const response = await axios.get(`items/${_id}`);
    return response.data;
  }
);

export const deleteItemById = createAsyncThunk(
  "fetch/deleteItemByIdStatus",
  async (_id) => {
    const response = await axios.delete(`items/${_id}`);
    return response.data;
  }
);

export const addItem = createAsyncThunk(
  "fetch/addItemStatus",
  async (params) => {
    const response = await axios.post(`items`, params);
    return response.data;
  }
);

export const editItem = createAsyncThunk(
  "fetch/editItemStatus",
  async (params) => {
    const response = await axios.patch(`items/${params._id}`, params);
    return response.data;
  }
);

const initialState = {
  status: "pending",
  items: [],
  itemById: {
    imageUrl: " ",
    title: " ",
    price: 0,
    quantity: 0,
    weight: 0,
    description: " ",
    compounds: " ",
    category: " ",
  },
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state, action) => {
      state.status = "pending";
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.status = "success";
      state.items = action.payload;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.items = [];
      state.status = "error";
    });

    ////////////////////////////////////////////////////////////////

    builder.addCase(fetchItemById.pending, (state, action) => {
      state.status = "pending";
      state.itemById = {};
    });
    builder.addCase(fetchItemById.fulfilled, (state, action) => {
      state.status = "success";
      state.itemById = action.payload;
    });
    builder.addCase(fetchItemById.rejected, (state, action) => {
      state.status = "error";
      state.itemById = {};
    });

    ////////////////////////////////////////////////////////////////

    builder.addCase(deleteItemById.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(deleteItemById.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(deleteItemById.rejected, (state, action) => {
      state.status = "error";
    });

    ////////////////////////////////////////////////////////////////

    builder.addCase(addItem.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(addItem.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(addItem.rejected, (state, action) => {
      state.status = "error";
    });

    ////////////////////////////////////////////////////////////////

    builder.addCase(editItem.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(editItem.fulfilled, (state, action) => {
      state.status = "success";
    });
    builder.addCase(editItem.rejected, (state, action) => {
      state.status = "error";
    });
  },
});

export default itemSlice.reducer;
