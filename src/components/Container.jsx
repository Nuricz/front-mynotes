import React from 'react';

import NoteList from './NoteList';
import FormNote from './FormNote';
import { Button } from 'react-bootstrap';

const Container = ({ notes, onUpdateNote }) => {
  const [showForm, setShowForm] = React.useState(false)
  const onClick = () => setShowForm(!showForm)
  return (
    <div className='container d-flex justify-content-center'>
      Container!
      <Button type="submit" onClick={onClick}>Add Note</Button>
      { showForm ? <FormNote setShowForm={setShowForm} /> : null }
      
      {notes ? (
        <NoteList notes={notes} onUpdateNote={onUpdateNote} />
      ) : (
        'Cargando'
      )}
    </div>
  )
}

export default Container;