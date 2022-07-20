import React from 'react';
import { useState } from 'react';
import NoteList from './NoteList';
import FormNote from './FormNote';
import { Button } from 'react-bootstrap';
import { saveNote } from '../services';

const Container = ({ notes, onAddNote, onDeleteNote }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (data) => {
    saveNote(data)
  }

  return (
    <div className='container d-flex justify-content-center'>
      
      { show ? <FormNote handleClose={handleClose} show={show} handleSubmit={handleSubmit} /> : null }
      
      {notes ? (
        <NoteList notes={notes}/>
        ) : (
          'Cargando'
          )}
      <Button type="submit" onClick={handleShow}>Add Note</Button>
    </div>
  )
}

export default Container;