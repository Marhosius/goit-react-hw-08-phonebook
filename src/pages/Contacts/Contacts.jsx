import ContactForm from 'components/ContactForm/ContactForm'
import ContactList from 'components/ContactList/ContactList'
import Filter from 'components/Filter/Filter'
import React from 'react'
import css from './contacts.module.css'

const Contacts = () => {

    return (
        <div className={css.phonebook}>
            <h1 className={[css.phonebookMainTittle, css.phonebookTittle]}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.phonebookTitle}>Contacts</h2>
            <Filter />
            <ContactList />
        </div>
    )
}

export default Contacts
