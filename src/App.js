import './App.scss';

import axios from "axios";
import { useState, useEffect } from "react";
import Container from './components/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [notes, setNotes] = useState(null);

  const onUpdateNote = (note) => {
    const noteItemIndex = notes.findIndex((x) => x.id === note.id);
    const newNotes = [...notes];

    const newNote = newNotes[noteItemIndex];
    newNote.completed = !newNote.completed;
    newNotes[noteItemIndex] = newNote;
    setNotes(newNotes);
  };

  useEffect(() => {
    axios.get("http://localhost:3001/notes").then((result) => {
      setNotes(result.data);
    });
  }, []); //[] only fires one time when the compent loads


  return (
    <div className="App">
      <Container notes={notes} onUpdateNote={onUpdateNote}/>
    </div>
  );
}

export default App;
