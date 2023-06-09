import { useState, useEffect } from "react";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import Notiflix from "notiflix";
import css from "./phonebook.module.css";

export const App = () => {


  const [contacts, setContacts] = useState([])
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (contacts.length !== 0) {
      localStorage.setItem("contacts", JSON.stringify(contacts))
    }
  }, [contacts])
  useEffect(() => {
    try {
      const geTcontacts = localStorage.getItem("contacts");
      const item = geTcontacts === null ? undefined : JSON.parse(geTcontacts);
      if (item !== undefined) {
        setContacts([...item])
      }
    } catch (error) {
      console.log(error)
    }

  }, [])


  const onAddNewContact = (item) => {
    if (contacts.find(({ name }) => name.toLowerCase() === item.name.toLowerCase())) {
      Notiflix.Notify.warning(`${item.name} is already in contacts`)
    } else {
      setContacts((prevContacts) => [...prevContacts, item])
    }
  };

  const onDeleteContact = (deletedId) => {
    setContacts(contacts.filter(({ id }) => id !== deletedId))
  };

  const onFilterChange = (value) => {
    setFilter(value)
  }

  const filteredContacts = () => !filter ?
    contacts.filter((el, index) => index <= 9)
    :
    contacts.filter(
      ({ name }) => name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <div className={css.phonebook}>
      <h1 className={[css.phonebookMainTittle, css.phonebookTittle]}>Phonebook</h1>
      <ContactForm onAddNewContact={onAddNewContact} />
      <h2 className={css.phonebookTitle}>Contacts</h2>
      <Filter onFilterChange={onFilterChange} />
      <ContactList filteredContacts={filteredContacts} onDeleteContact={onDeleteContact} />
    </div>
  )

};