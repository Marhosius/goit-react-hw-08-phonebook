import { createSlice } from '@reduxjs/toolkit'
import { getProfileThunk, loginThunk } from './AuthorizationThunk'

const initialState = {
    profile: null,
    access_token: '',
    error: '',
    isLoading: true
}

const handlePending = (state) => {
    state.isLoading = true
    state.error = ''
}

const handleRejected = (state, { error, payload }) => {
    state.isLoading = false
    state.error = payload ?? error.message
}

const handleFulfilled = (state, { payload }) => {
    state.isLoading = false
    state.access_token = payload.token
}

const handleFulfilledProfile = (state, { payload }) => {
    state.isLoading = false
    state.profile = payload
}

const authorizationSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logOut: (state) => {
            state.access_token = ''
            state.isLoading = false
            state.error = ''
            state.profile = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, handleFulfilled)
            .addCase(getProfileThunk.fulfilled, handleFulfilledProfile)
            .addMatcher(({ type }) => type.endsWith('/pending'), handlePending)
            .addMatcher(
                ({ type }) => type.endsWith('/rejected'),
                handleRejected
            )
    },
})

export const authorizationReducer = authorizationSlice.reducer
export const { logOut } = authorizationSlice.actions