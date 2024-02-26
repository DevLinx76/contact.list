// src/components/ContactRow.jsx

export default function ContactRow({ contact, setSelectedContact }) {
    return (
        <tr onClick={() => setSelectedContact(contact.id)}>
        <td>{contact.name}</td>
        <td>{contact.email}</td>
        <td>{contact.phone}</td>
        </tr>
    );
    }