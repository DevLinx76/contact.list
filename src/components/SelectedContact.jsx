// src/components/SelectedContact.jsx
import { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId, setSelectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContactDetails() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Failed to fetch contact details:', error);
      }
    }
    fetchContactDetails();
  }, [selectedContactId]);

  if (!contact) return <div>Loading...</div>;

  return (    
    contact ? (              
        <div className='contactInfo'>
          <h1>Contact Details</h1>
          <p>Name: {contact.name}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <button onClick={() => setSelectedContactId(null)}>Go Back to Contact List</button>
        </div>
      ) 
        :
      <h2>Fetching some data</h2>   
  );    
}