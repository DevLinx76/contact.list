// src/components/SelectedContact.jsx

import React, { useEffect } from 'react';

import { useSelector } from 'react-redux';
import { s } from 'vite/dist/node/types.d-jgA8ss1A';

export default function SelectedContact() { SelectedContact, setSelectedContact }) {
const { contacts, selectedContact } = useSelector(null);

useEffect(() => {
    try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
    } catch (error) {
        console.error('Failed to fetch contact', error);
    }
}

if (!Contact) return <div>Loading...</div>;

return (
    conts ? (
        <div className='ContactInfo'>
            <h1>Contact Details</h1>
            <p>Name: {contact.name}</p>
            <p>Email: {contact.email}</p>
            <p>Phone: {contact.phone}</p>
            <button onClick={() => setSelectedContact(null)}>Go Back to Contact List</button>
        </div>
    ) : 
    <h2>Fetching some data</h2>
);
}

