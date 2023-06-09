import { useState } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import css from "../phonebook.module.css";

export const ContactForm = ({ onAddNewContact }) => {

    const [name, setName] = useState('')
    const [number, setNumber] = useState('');

    const onInputChange = (event) => {
        const { name, value } = event.target;
        if (name === "name") setName(value)
        if (name === "number") setNumber(value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        onAddNewContact({ id: (nanoid(6)), name: name, number: number })
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
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
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
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
            <input className={css.phonebookFormSubmit} type="submit" title="Submit"></input>
        </form>
    )
}

ContactForm.propTypes = {
    onAddNewContact: PropTypes.func.isRequired
}

export default ContactForm