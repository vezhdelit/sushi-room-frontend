import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    category: 'Всі',
    sortType: { name: 'популярність', sortProperty: 'rating' },
    sortOrder: { name: 'за зростанням', orderProperty: 1 },
    showOnlyFavourites: false,
    searchValue: '',
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory(state, action) {
            state.category = action.payload;
        },

        setSortType(state, action) {
            state.sortType = action.payload;
        },
        setSortOrder(state, action) {
            state.sortOrder = action.payload;
        },
        setShowOnlyFavourites(state, action) {
            state.showOnlyFavourites = action.payload;
        },
        setSearchValue(state, action) {
            state.searchValue = action.payload;
        },
    },
});

export const { setCategory, setSortType, setSortOrder, setShowOnlyFavourites, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
