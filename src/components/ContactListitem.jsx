import { Component } from "react";
import PropTypes from "prop-types";
import css from "./phonebook.module.css";

export class ContactListitem extends Component {
    onDelete = (event) => {
        const { id } = event.target;
        this.props.onDeleteContact(id);
    }
    render() {
        const { name, number, id } = this.props
        return (
            <li className={css.phonebookContactsItem}>
                <p className={css.phonebookContactsText}>{name}: {number}</p>
                <button onClick={this.onDelete} id={id} className={css.phonebookContactsBtn}><span className={css.phonebookContactsBtnSpan}></span>Delete</button>
            </li>
        )
    }
}

ContactListitem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func

}

export default ContactListitem