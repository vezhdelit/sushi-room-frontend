import axios from '../../middleware/axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchLogin = createAsyncThunk(
    'auth/fetchLoginStatus', async (params) => {
        const response = await axios.post(`/auth/login`, params);
        return response.data
    }
);

export const fetchRegister = createAsyncThunk(
    'auth/fetchRegisterStatus', async (params) => {
        const response = await axios.post(`/auth/register`, params);
        return response.data
    }
);

export const fetchAuth = createAsyncThunk(
    'auth/fetchAuthStatus', async () => {
        const response = await axios.get(`/auth/profile`);
        return response.data
    }
);

export const addFavourite = createAsyncThunk(
    'auth/addFavouriteStatus', async (params) => {
        const response = await axios.patch(`/auth/addFavourite`, params);
        return response.data
    }
);

export const removeFavourite = createAsyncThunk(
    'auth/removeFavouriteStatus', async (params) => {
        const response = await axios.patch(`/auth/removeFavourite`, params);
        return response.data
    }
);

const initialState = {
    data: null,
    status: 'pending',
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.status = 'pending';
            state.data = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchLogin.pending, (state, action) => {
            state.status = 'pending';
            state.data = null;
        })
        builder.addCase(fetchLogin.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        builder.addCase(fetchLogin.rejected, (state, action) => {
            state.status = 'error';
            state.data = null;
        })
        ////////////////////////////////////////

        builder.addCase(fetchRegister.pending, (state, action) => {
            state.status = 'pending';
            state.data = null;
        })
        builder.addCase(fetchRegister.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        builder.addCase(fetchRegister.rejected, (state, action) => {
            state.status = 'error';
            state.data = null;
        })

        ////////////////////////////////////////

        builder.addCase(fetchAuth.pending, (state, action) => {
            state.status = 'pending';
            state.data = null;
        })
        builder.addCase(fetchAuth.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        })
        builder.addCase(fetchAuth.rejected, (state, action) => {
            state.status = 'error';
            state.data = null;
        })

        /////////////////////////////////////////

        builder.addCase(addFavourite.fulfilled, (state, action) => {
            state.data.favourites = action.payload.favourites;
        })

        builder.addCase(removeFavourite.fulfilled, (state, action) => {
            state.data.favourites = action.payload.favourites;
        })

    }
}
);

export const selectIsAuth = state => Boolean(state.auth.data);

export default authSlice.reducer;

export const { logout } = authSlice.actions;