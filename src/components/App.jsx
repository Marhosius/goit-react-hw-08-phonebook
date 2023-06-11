
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";
import { useSelector } from "react-redux";
import { filteredSelector } from "store/slice";

export const App = () => {
  const filteredContacts = useSelector(filteredSelector);

  return (
    <div className={css.phonebook}>
      <h1 className={[css.phonebookMainTittle, css.phonebookTittle]}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phonebookTitle}>Contacts</h2>
      <Filter />
      <ContactList filteredContacts={filteredContacts} />
    </div>
  )

};