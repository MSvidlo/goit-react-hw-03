import Contact from "../Contact/Contact";
import React from "react";

const ContactList = ({ filterContacts }) => { 
    return (
        <ul>
            {filterContacts.map((contact) => (
                <li key={contact.id}>
                    <Contact
                        name={contact.name}
                        number={contact.number}
                    />

                </li>
            ))}
        </ul>
    )
    
};


export default ContactList;