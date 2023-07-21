import { useState } from 'react';
import ContactList from './Components/ContactList';
import SelectedContact from './Components/SelectedContact';
import './App.css';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <>
    {selectedContactId ?
        (<SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId} />)
        : (<ContactList setSelectedContactId={setSelectedContactId} />)}
    </>
  )
}
  
export default App
