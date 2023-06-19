
import PropTypes from "prop-types";
import css from "./ContactListitem.module.css";
import { useDispatch } from "react-redux";
import { deleteContactThunk } from "store/thunks";

export const ContactListitem = ({ name, number, id }) => {
    const dispatch = useDispatch()
    const onDelete = (event) => {
        const { id } = event.target;
        dispatch(deleteContactThunk(id))
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
    name: PropTypes.string.isRequired

}

export default ContactListitem