
import './App.css';
import React from 'react';
import  ContactFrom from './components/ContactForm/ContactForm';
import ContacList from './components/ContactList/ContactList';
import SearchForm from './components/SearchForm/SearchForm';
import { useState } from 'react';
import { useEffect } from 'react';
import contacts from './contacts.json'


const App = () => {

  const [searchValue, setSearchValue] = useState('');

  const handleChangeSearch = (event) => {
    console.log('work', event.target.value);
    setSearchValue(() => {
       event.target.value
    })
  }
  
  
  return (
    <>
     <div>
  <h1>Phonebook</h1>
  <ContactFrom />
        <SearchForm searchValue={searchValue}
        handleChangeSearch= {handleChangeSearch}
        />
  <ContacList contacts={contacts} />
</div>
    </>
  );
};


export default App
