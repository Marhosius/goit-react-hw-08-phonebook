
import { contactsSelector, filterSelector } from "store/slice";
import ContactListitem from "../ContactListitem/ContactListitem";
import css from "./ContactList.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "store/thunks";
import NotFound from "./NotFound/NotFound";

export const ContactList = () => {
    const { profile } = useSelector((state) => state.authorization)
    const dispatch = useDispatch()
    useEffect(() => {
        if (profile) {
            dispatch(fetchContactsThunk())
        }
    }, [dispatch, profile])

    const { items } = useSelector(contactsSelector);
    const filter = useSelector(filterSelector);
    const filteredContacts = !filter ? items.filter((el, index) => index <= 9)
        : items.filter(({ name }) =>
            name.toLowerCase().includes(filter.toLowerCase()))

    return (
        filteredContacts?.length > 0 ? (<ul className={css.phonebookContacts}>
            {filteredContacts.map(({ name, number, id }) =>
                <ContactListitem name={name} number={number} key={id} id={id} />)}
        </ul>) : <NotFound />

    )
}



export default ContactList