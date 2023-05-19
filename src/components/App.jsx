import { Component } from "react";
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import Notiflix from "notiflix";
import css from "./phonebook.module.css";

export class App extends Component {

  state = {
    contacts: [],
    filter: ''
  }

  componentDidMount = () => {
    try {
      const geTcontacts = localStorage.getItem("contacts");
      const item = geTcontacts === null ? undefined : JSON.parse(geTcontacts);
      if (item !== undefined) {
        this.setState(() => ({
          contacts: [...item]
        }))
      }
    } catch (error) {
      console.log(error)
    }
  }


  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
    }
  }


  onAddNewContact = (item) => {
    if (this.state.contacts.find(({ name }) => name.toLowerCase() === item.name.toLowerCase())) {
      Notiflix.Notify.warning(`${item.name} is already in contacts`)
    } else {
      this.setState((prevState) => ({
        contacts: [...prevState.contacts, item]
      }))
    }
  };

  onDeleteContact = (deletedId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(({ id }) => id !== deletedId)
    }))
  };

  onFilterChange = (value) => {
    this.setState({ filter: value })
  }

  filteredContacts = () => !this.state.filter ?
    this.state.contacts.filter((el, index) => index <= 9)
    :
    this.state.contacts.filter(
      ({ name }) => name.toLowerCase().includes(this.state.filter.toLowerCase())
    );


  render() {
    return (
      <div className={css.phonebook}>
        <h1 className={[css.phonebookMainTittle, css.phonebookTittle]}>Phonebook</h1>
        <ContactForm onAddNewContact={this.onAddNewContact} />
        <h2 className={css.phonebookTitle}>Contacts</h2>
        <Filter onFilterChange={this.onFilterChange} />
        <ContactList filteredContacts={this.filteredContacts} onDeleteContact={this.onDeleteContact} />
      </div>
    )
  };
};