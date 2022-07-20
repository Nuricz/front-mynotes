import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const CategoryForm = props => {
  const { handleCloseCategoryForm, showCategoryForm, handleSubmitCategory } = props;

  const [formValues, setFormValues] = useState({
      name: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    handleSubmitCategory({ ...formValues })
    handleCloseCategoryForm()
  }

  return (
    <Modal
      show={showCategoryForm}
      onHide={handleCloseCategoryForm}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Add category</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form className="card container" onSubmit={handleSubmit}>
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
        <Button
          variant="primary"
          disabled={formValues.name ? "" : "disabled"}
          type="submit"
        >Save changes</Button>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseCategoryForm}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
};

export default CategoryForm;