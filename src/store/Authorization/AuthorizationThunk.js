import { createAsyncThunk } from '@reduxjs/toolkit'
import { getProfile, logIn } from 'api/authorization'

export const getProfileThunk = createAsyncThunk('auth/profile', () =>
    getProfile()
)

export const loginThunk = createAsyncThunk(
    'auth/login',
    async (body, { rejectWithValue, dispatch }) => {
        try {
            const data = await logIn(body)
            dispatch(getProfileThunk())
            return data
        } catch (error) {
            return rejectWithValue(error.response.data.message)
        }
    }
)