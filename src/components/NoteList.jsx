import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';
import Note from "./Note";

const NoteList = ({
	notes,
	handleDelete,
	handleShow,
	handleEdit,
	archive,
	categoriesList,
	selectedCategory
}) => {

	return (
		<ListGroup className="list-group">
			{
				notes.map(
					(note) => (
				 		note.category.map(element => 
								(element.id == selectedCategory) && note.archive === archive ?
									<ListGroup.Item
									as="li"
									className="d-flex justify-content-between align-items-start"
									key={note.id}
									>
											<Note
												note={note}
												handleDelete={handleDelete}
												handleShow={handleShow}
												handleEdit={handleEdit}
												categoriesList={categoriesList}
											/>
										</ListGroup.Item>
								: null
						)
					)
				)
			}
		</ListGroup>);
};

export default NoteList;