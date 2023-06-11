const { createSlice } = require("@reduxjs/toolkit");
const { initialState } = require("./initialState");
const Notiflix = require("notiflix");



const slice = createSlice({
    name: 'Phonebook',
    initialState,
    reducers: {
        addNewContact: (state, { payload }) => {
            if (state.contacts?.find(({ name }) => name.toLowerCase() === payload.name.toLowerCase())) {
                Notiflix.Notify.warning(`${payload.name} is already in contacts`)
            } else {
                state.contacts.push(payload)
            }
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

export const filteredSelector = ({ filter, contacts }) =>
    !filter ? contacts.filter((el, index) => index <= 9)
        :
        contacts.filter(
            ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
        )
