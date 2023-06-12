const { createSlice } = require("@reduxjs/toolkit");
const { initialState } = require("./initialState");



const slice = createSlice({
    name: 'Phonebook',
    initialState,
    reducers: {
        addNewContact: (state, { payload }) => {
            state.contacts.push(payload)
        },
        deleteContact: (state, { payload }) => {
            state.contacts = state.contacts.filter(({ id }) => id !== payload)
        },
        filterChange: (state, { payload }) => {
            state.filter = payload
        },
    }
})

export const reducer = slice.reducer;
export const { addNewContact, deleteContact, filterChange } = slice.actions

// SELECTORS

export const contactsSelector = (state) => state.contacts
export const filterSelector = (state) => state.filter
