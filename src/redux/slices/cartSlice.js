import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalPrice: 0,
    totalCount: 0,
    discount: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const findItem = state.items.find(obj => obj._id === action.payload._id);

            if (findItem) {
                findItem.count++;
            }
            else {
                state.items.push({
                    ...action.payload,
                    count: 1
                });
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },

        removeItem(state, action) {
            const findItem = state.items.find((obj) => obj._id === action.payload);

            if (findItem) {
                findItem.count--;
            };

            if (!findItem.count) {
                state.items = state.items.filter((obj) => obj._id !== action.payload);
            }

            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);

        },

        deleteItem(state, action) {
            state.items = state.items.filter((obj) => obj._id !== action.payload);
            state.totalPrice = state.items.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum;
            }, 0);
            state.totalCount = state.items.reduce((sum, obj) => {
                return obj.count + sum;
            }, 0);
        },

        clearAllItems(state) {
            state.items = [];
            state.totalPrice = 0;
            state.totalCount = 0;
        },

        setDiscount(state, action) {
            state.discount = action.payload;
        },
    },
});

export const { addItem, removeItem, deleteItem, clearAllItems, setDiscount } = cartSlice.actions;

export default cartSlice.reducer;
