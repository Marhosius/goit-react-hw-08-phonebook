import { addContactThunk, deleteContactThunk, fetchContactsThunk } from "./thunks";

const { createSlice } = require("@reduxjs/toolkit");
const { initialState } = require("./initialState");

const handlePending = (state) => {
    state.contacts.isLoading = true
    state.contacts.error = null
}

const handleRejected = (state, { payload }) => {
    state.contacts.isLoading = false
    state.contacts.error = payload
}

const handleFulfillContacts = (state, { payload }) => {
    state.contacts.isLoading = false
    state.contacts.items = payload
}
const handleAddContact = (state, { payload }) => {
    state.contacts.isLoading = false
    state.contacts.items.push(payload)
}
const deleteContact = (state, { payload }) => {
    state.contacts.isLoading = false
    state.contacts.items = state.contacts.items.filter(({ id }) => id !== payload)
}

const slice = createSlice({
    name: 'Phonebook',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchContactsThunk.fulfilled, handleFulfillContacts)
            .addCase(fetchContactsThunk.pending, handlePending)
            .addCase(fetchContactsThunk.rejected, handleRejected)
            .addCase(addContactThunk.fulfilled, handleAddContact)
            .addCase(addContactThunk.pending, handlePending)
            .addCase(addContactThunk.rejected, handleRejected)
            .addCase(deleteContactThunk.fulfilled, deleteContact)
            .addCase(deleteContactThunk.pending, handlePending)
            .addCase(deleteContactThunk.rejected, handleRejected)
    },
    reducers: {
        // addNewContact: (state, { payload }) => {
        //     state.contacts.push(payload)
        // },
        // deleteContact: (state, { payload }) => {
        //     state.contacts = state.contacts.filter(({ id }) => id !== payload)
        // },
        filterChange: (state, { payload }) => {
            state.filter = payload
        },
    }
})

export const reducer = slice.reducer;
export const { addNewContact, filterChange } = slice.actions

// SELECTORS

export const contactsSelector = (state) => state.contacts
export const filterSelector = (state) => state.filter
