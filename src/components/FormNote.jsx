import React, { useState } from "react";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Multiselect from 'multiselect-react-dropdown';

const FormNote = props => {
  const {
    handleCloseNoteForm,
    show,
    handleSubmit,
    editNote,
    handleEdit,
    categoriesList
  } = props;

  const [formValues, setFormValues] = useState({
    name: editNote.name,
    description: editNote.description,
    archive: editNote.archive,
    categories: editNote.category,
  })

  const onSelect = (selectedList, selectedItem) => {
    let arr = formValues.categories
    arr.push(selectedItem)
    setFormValues({ ...formValues, categories: arr})
    console.log(formValues.categories)
  }

  const onRemove = (selectedList, removedItem) => {
    let arr = formValues.categories;
    let index = arr.indexOf(removedItem)
    if(index !== -1){
      arr.splice(index, 1)
    }
    setFormValues({ ...formValues, categories: arr})
    console.log(formValues.categories)
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormValues({ ...formValues, [name]: value })
  }

  const handleChangeCheck = (e) => {
    setFormValues({ ...formValues, archive: e.target.checked })
  }

  const _handleSubmit = (e) => {
    e.preventDefault()
    editNote.name !== '' ?
      handleEdit({ ...formValues }, editNote.id) :
      handleSubmit({ ...formValues })
    handleCloseNoteForm()
  }

  return (
    <Modal
      show={show}
      onHide={handleCloseNoteForm}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>{editNote.name === '' ? 'Add note' : 'Edit note'}</Modal.Title>
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
              as="textarea"
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
              checked={formValues.archive}
              onChange={handleChangeCheck}
            />
            <Multiselect
              options={categoriesList} 
              displayValue="name"
              onSelect={onSelect}
              onRemove={onRemove}
              selectedValues={formValues.categories}
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
        <Button variant="secondary" onClick={handleCloseNoteForm}>Close</Button>
      </Modal.Footer>
    </Modal>

  );
};

export default FormNote;