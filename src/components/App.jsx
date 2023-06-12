
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import css from "./App.module.css";

export const App = () => {

  return (
    <div className={css.phonebook}>
      <h1 className={[css.phonebookMainTittle, css.phonebookTittle]}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.phonebookTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  )

};