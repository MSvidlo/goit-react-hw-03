
import './App.css';
import React from 'react';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchForm from './components/SearchBox/SearchBox';
import { useState } from 'react';
import { useEffect } from 'react';
import contacts from './contacts.json'
import * as Yup from "yup";
import { Formik, Form, Field  } from 'formik';
import initialContacts from './contacts.json';

const App = () => {
  const [contacts, setContacts] = useState(initialContacts);
  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event) => {
    setSearchValue(event.target.value);
  }

  const addContact = (newContact) => {
    setContacts([...contacts, newContact]);
  }

  const filterContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactFrom addContact={addContact} />
      <SearchForm searchValue={searchValue} handleChangeSearch={handleChangeSearch} />
      <ContacList contacts={contacts} filterContacts={filterContacts} />
    </div>
  );
};

export default App
