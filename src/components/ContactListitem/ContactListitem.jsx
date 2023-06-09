
import PropTypes from "prop-types";
import css from "../phonebook.module.css";

export const ContactListitem = ({ onDeleteContact, name, number, id }) => {
    const onDelete = (event) => {
        const { id } = event.target;
        onDeleteContact(id);
    }
    return (
        <li className={css.phonebookContactsItem}>
            <p className={css.phonebookContactsText}>{name}: {number}</p>
            <button onClick={onDelete} id={id} className={css.phonebookContactsBtn}><span className={css.phonebookContactsBtnSpan}></span>Delete</button>
        </li>
    )
}

ContactListitem.propTypes = {
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onDeleteContact: PropTypes.func

}

export default ContactListitem