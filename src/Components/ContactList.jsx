import React from "react"; 
import { useState } from "react";
import { useEffect } from "react";
import ContactRow from "./ContactRow";

export default function ContactList({ setSelectedContactId }) { 
  const [contacts, setContacts] = useState(null);
  
 useEffect(() => {
        async function fetchContacts() {
            try {
                const response = await fetch("https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users");
                const result = await response.json();
                setContacts(result);
            } catch (error) {
                console.log(error);
            }
        }
        fetchContacts();
    }, []);

    console.log("Contacts: ", contacts);

    if (contacts) {
        return (<table>
            <thead>
                <tr>
                    <th colSpan="3">Contact List</th>
                </tr>
                <tr> {/*Moved to thead for styling purposes */}
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone</td>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact) => {
                    return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId} />;
                })}
            </tbody>
        </table>);
    } else {
        return null;
    }
}