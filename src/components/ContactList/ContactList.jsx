import Contact from "../Contact/Contact";
import React from "react";

const ContactList = ({ contacts }) => { 
    return (
        <ul>
            {contacts.map((contact) => (
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