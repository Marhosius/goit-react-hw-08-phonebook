import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { contactsSelector } from "store/slice";
import { useDispatch, useSelector } from "react-redux";
import Notiflix from "notiflix";
import { addContactThunk } from "store/thunks";

export const ContactForm = () => {
    const { items } = useSelector(contactsSelector);
    const [name, setName] = useState('')
    const [number, setNumber] = useState('');
    const dispatch = useDispatch()

    const onInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") setName(value)
        if (name === "number") setNumber(value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (items?.find((el) =>
            el.name.toLowerCase() === name.toLowerCase())) {
            Notiflix.Notify.warning(`${name} is already in contacts`)
        } else {
            dispatch(addContactThunk({ id: (nanoid(6)), name: name, phone: number }))
        }
        setName('')
        setNumber('')
    }

    return (
        <form onSubmit={onFormSubmit} className={css.phonebookForm}>
            <label htmlFor="id-name" className={css.phonebookFormLabel}>Name</label>
            <input
                className={css.phonebookFormInput}
                onChange={onInputChange}
                id="id-name"
                value={name}
                type="text"
                name="name"
                pattern="[A-Za-z]{1,32}"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
            <label htmlFor="id-number" className={css.phonebookFormLabel}>Number</label>
            <input
                className={css.phonebookFormInput}
                onChange={onInputChange}
                id="id-number"
                value={number}
                name="number"
                type="tel"
                pattern="^[1-9]\d*$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <input className={css.phonebookFormSubmit} type="submit" title="Submit"></input>
        </form>
    )
}

export default ContactForm