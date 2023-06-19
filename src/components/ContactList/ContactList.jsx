
import { contactsSelector, filterSelector } from "store/slice";
import ContactListitem from "../ContactListitem/ContactListitem";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "store/thunks";

export const ContactList = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContactsThunk())
    }, [dispatch])

    const { items } = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
    const filteredContacts = !filter ? items.filter((el, index) => index <= 9)
        : items.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()))

    return (
        <ul className={css.phonebookContacts}>
            {filteredContacts.map(({ name, phone: number, id }) =>
                <ContactListitem name={name} number={number} key={id} id={id} />)}
        </ul>
    )
}



export default ContactList