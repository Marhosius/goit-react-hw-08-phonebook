import { Component } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import css from "./phonebook.module.css";

export class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    }

    onInputChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onAddNewContact({ id: (nanoid(6)), name: this.state.name, number: this.state.number })
        this.setState({
            name: "",
            number: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className={css.phonebookForm}>
                <label htmlFor="id-name" className={css.phonebookFormLabel}>Name</label>
                <input
                    className={css.phonebookFormInput}
                    onChange={this.onInputChange}
                    id="id-name"
                    value={this.state.name}
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
                <label htmlFor="id-number" className={css.phonebookFormLabel}>Number</label>
                <input
                    className={css.phonebookFormInput}
                    onChange={this.onInputChange}
                    id="id-number"
                    value={this.state.number}
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
}

ContactForm.propTypes = {
    onAddNewContact: PropTypes.func.isRequired
}

export default ContactForm