
import './App.css';
import React from 'react';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchForm from './components/SearchBox/SearchBox';
import { useState } from 'react';
import { useEffect } from 'react';
import contacts from './contacts.json'


const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event) => {
     setSearchValue(event.target.value);
  }

  const filterContacts = contacts.filter((contact) => 
    contact.name.toLowerCase().includes(searchValue.toLowerCase()));


    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactFrom />
          <SearchForm searchValue={searchValue}
            handleChangeSearch={handleChangeSearch}
          />
          <ContacList contacts={contacts} filterContacts={filterContacts} />
        </div>
      </>
    );
  };


export default App
