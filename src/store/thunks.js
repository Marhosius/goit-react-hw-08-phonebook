import { createAsyncThunk } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "api/api";


export const fetchContactsThunk = createAsyncThunk(
    'Phonebook/fetchContacts',
    () => {
        return fetchContacts()
    })
export const addContactThunk = createAsyncThunk(
    'Phonebook/addContact', (data) => {
        return addContact(data)
    })
export const deleteContactThunk = createAsyncThunk(
    'Phonebook/deleteContact', (id) => {
        return deleteContact(id)
    })