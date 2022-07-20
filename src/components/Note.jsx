import React from "react";
import { useState } from "react";
import { Button, Card } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';
import FormNote from "./FormNote";

const Note = ({ 
	note, 
	handleDelete, 
	handleEdit,
	categoriesList 
}) => {
	const [show, setShow] = useState(false);

  const handleCloseNoteForm = () => setShow(false);
  const handleShow = () => setShow(true);

	return (
		<>
		{ show ? 
			<FormNote 
				handleCloseNoteForm={handleCloseNoteForm}
				show={show}
				editNote={note}
				handleEdit={handleEdit}
				categoriesList={categoriesList}
			/> 
		: null }
		<Card style={{ width: '25rem' }}>
			<Card.Header>
				{note.name}
			<Button 
				variant="danger"
				onClick={() => {if(window.confirm("Delete this note?")) {handleDelete(note.id)}}}
				>
				<Icon.Trash2Fill/>
				</Button>
				<Button 
				variant="info"
				onClick={handleShow}
				>
				<Icon.PencilSquare/>
				</Button>
			</Card.Header>
			<Card.Body>
					<Card.Subtitle className="mb-2 text-muted">{note.archive ? 'Archive' : 'Active'}</Card.Subtitle>
				
			<Card.Text>
				{note.description}
			</Card.Text>
			<footer className="blockquote-footer">
				{note.category.map((c) => c.name + ' '
				)}
				
			</footer>
			</Card.Body>
		</Card>
		</>
	)
};

export default Note;