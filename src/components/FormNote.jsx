import React, { useState } from "react";
import { Col } from "react-bootstrap";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const FormNote = props => {
  const { setShowForm } = props; //(C-1)
  const [description, setDescription] = useState(""); // (F-1)
  const [name, setName] = useState(""); // (F-1)

  return (
    <Form className="card container">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Archive?" />
      </Form.Group>
      <Row>
      <Col>
        <Button variant="primary" type="submit" disabled={description && name ? "" : "disabled"}>
          Submit
        </Button>
      </Col>
      <Col>
        <Button variant="primary" type="submit" onClick={setShowForm(true)}>
          Cancel
        </Button>
      </Col>
      </Row>
    </Form>
  );
};

export default FormNote;