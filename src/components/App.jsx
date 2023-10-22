import { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(({ id }) => id !== contactId),
    }));
  };

  addContact = data => {
    const { contacts } = this.state;
    if (contacts.find(({ name }) => name === data.name)) {
      return alert(`${data.name} is already in contacts`);
    } else {
      const newContact = {
        id: nanoid(),
        name: data.name,
        number: data.number,
      };
      this.setState({
        contacts: [newContact, ...contacts],
      });
    }
    // const newContact =
  };

  handleFilter = event =>
    this.setState({ filter: event.target.value.toLowerCase() });

  visibleContacts = () => {
    const { contacts, filter } = this.state;
    if (filter) {
      return contacts.filter(({ name }) => name.toLowerCase().includes(filter));
    } else {
      return contacts;
    }
  };

  render() {
    const { filter } = this.state;

    const filteredContacts = this.visibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <ContactForm addContact={this.addContact} />
        <Filter filter={filter} onChange={this.handleFilter} />
        <h2>Contacts</h2>
        <ContactList
          contacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
