import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const FormNote = props => {
  const { handleClose, show, handleSubmit } = props;

  const [formValues, setFormValues] = useState({
    name: '',
    description: '',
    archive: false,
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValues({ ...formValues, [name]: value })
  }

  const handleChangeCheck = (e) => {
    const { name, value } = e.target.checked

    setFormValues({ ...formValues, [name]: value })
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    handleSubmit({ ...formValues })
  }

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add Note</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="card container" onSubmit={_handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter name" 
              name='name' 
              value={formValues.name}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Enter description" 
              name='description' 
              value={formValues.description}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check 
              type="checkbox" 
              label="Archive?"
              name='archive' 
              value={formValues.archive}
              onChange={handleChangeCheck}
            />
          </Form.Group>
        <Button
          variant="primary"
          disabled={formValues.description && formValues.name ? "" : "disabled"}
          type="submit"
        >Save changes</Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
};

export default FormNote;