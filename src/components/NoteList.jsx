import React from "react";

import ListGroup from 'react-bootstrap/ListGroup';

const NoteList = ({ notes }) => {
	return (
		<ListGroup className="list-group">
			{notes.map((note) => (
				<ListGroup.Item
					as="li"
					className="d-flex justify-content-between align-items-start"
					key={note.id}
				>
					<div className="ms-2 me-auto">
						<div className="fw-bold">{note.name}</div>
						{note.description}
					</div>
					<input
						type="checkbox"
						checked={note.archive}
					/>
				</ListGroup.Item>
			))}
		</ListGroup>);
};

export default NoteList;