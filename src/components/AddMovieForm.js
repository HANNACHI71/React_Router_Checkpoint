import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddMovieForm = ({add}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({ ...formData, [name]: value });
};

const [formData, setFormData] = useState({
  title: '',
  description: '',
  posterURL: '',
  rate: ''
});

const handleSubmit = (e) => { 
    setFormData({
    title: '',
    description: '',
    posterURL: '',
    rate: ''
  });
  add(formData);
  handleClose();
};
  return (
    <form onSubmit={handleSubmit} >
      <Button  style={{margin:'10px 5px 10px 0px', padding:"5px", }} variant="danger" onClick={handleShow}> Add New Movie </Button>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton className="p-1 mb-1 bg-dark text-white">
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{gap:"1px", }} >
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="Form.ControlInput1">
              <Form.Label>Title</Form.Label> <Form.Control type="text" name="title" placeholder="Title" value={formData.title} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput2">
              <Form.Label>Description</Form.Label> <Form.Control type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput3">
              <Form.Label>Poster URL</Form.Label> <Form.Control type="text" name="posterURL" placeholder="Poster URL" value={formData.posterURL} onChange={handleChange} required autoFocus />
            </Form.Group>
            <Form.Group className="mb-3" controlId="Form.ControlInput4">
              <Form.Label>Rate</Form.Label> <Form.Control type="number" name="rate" placeholder="Rate" value={formData.rate} onChange={handleChange} min="0" max="5" step="1" required autoFocus />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer > 
          <Button variant="secondary" onClick={handleClose}> Cancel </Button>
          <Button variant="danger" onClick={()=>handleSubmit()} > Add New Movie </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
};

export default AddMovieForm;