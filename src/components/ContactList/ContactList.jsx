
import ContactListitem from "../ContactListitem/ContactListitem";
import PropTypes from "prop-types";
import css from "./ContactList.module.css";

export const ContactList = ({ filteredContacts }) => {
    return (
        <ul className={css.phonebookContacts}>
            {filteredContacts.map(({ name, number, id }) => <ContactListitem name={name} number={number} key={id} id={id} />)}
        </ul>
    )
}

ContactList.propTypes = {
    props: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    }))

}

export default ContactList