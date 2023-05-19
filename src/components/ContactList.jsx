import { Component } from "react";
import ContactListitem from "./ContactListitem";
import PropTypes from "prop-types";
import css from "./phonebook.module.css";

export class ContactList extends Component {
    render() {
        return (
            <ul className={css.phonebookContacts}>
                {this.props.filteredContacts().map(({ name, number, id }) => <ContactListitem name={name} number={number} key={id} id={id} onDeleteContact={this.props.onDeleteContact} />)}
            </ul>
        )
    }
}

ContactList.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })),
    onDeleteContact: PropTypes.func

}

export default ContactList