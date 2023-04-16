import axios from '../../middleware/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSlides = createAsyncThunk(
    'fetch/fetchSlidesStatus', async () => {
        const response = await axios.get(`/ads`);
        return response.data
    }
);

const initialState = {
    slides: [],
    status: 'pending',
};


const adSlice = createSlice({
    name: 'ad',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSlides.pending, (state, action) => {
            state.status = 'pending';
            state.slides = [];
        })
        builder.addCase(fetchSlides.fulfilled, (state, action) => {
            state.status = 'success';
            state.slides = action.payload;
        })
        builder.addCase(fetchSlides.rejected, (state, action) => {
            state.status = 'error';
            state.slides = [];
        })

    }
});


export default adSlice.reducer;
