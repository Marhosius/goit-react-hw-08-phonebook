import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./ContactForm.module.css";
import { addNewContact } from "store/slice";
import { useDispatch } from "react-redux";

export const ContactForm = () => {

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
        dispatch(addNewContact({ id: (nanoid(6)), name: name, number: number }))
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