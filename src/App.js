import './App.scss';

import axios from "axios";
import { useState, useEffect } from "react";
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { getNotes } from './services'; 

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function loadNotes() {
      const response = await getNotes()

      if (response.status === 200) {
        console.log(response)
        setNotes(response.data)
      }
    }

    loadNotes()
  }, []); //[] only fires one time when the compent loads


  return (
    <div className="App">
      <Container 
        notes={notes} />
    </div>
  );
}

export default App;
