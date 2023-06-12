
import { contactsSelector, filterSelector } from "store/slice";
import ContactListitem from "../ContactListitem/ContactListitem";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export const ContactList = () => {
    const contacts = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
    const filteredContacts = !filter ? contacts.filter((el, index) => index <= 9) : contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul className={css.phonebookContacts}>
            {filteredContacts.map(({ name, number, id }) => <ContactListitem name={name} number={number} key={id} id={id} />)}
        </ul>
    )
}



export default ContactList