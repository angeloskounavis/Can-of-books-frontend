import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

class UpdateBookForm extends React.Component {

  render () {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        className='update-book-modal'
      >
        <Form onSubmit= {this.props.submit}>
          <Form.Group className='updatedBookTitle' controlId="title">
            <Form.Label>New Title</Form.Label>
            <Form.Control type='input' placeholder='Edit book title'></Form.Control>
          </Form.Group>
          <Form.Group className='updatedBookDescription' controlId="description">
            <Form.Label>New Description</Form.Label>
            <Form.Control type='textarea' placeholder='Edit book description'></Form.Control>
          </Form.Group>
          <Form.Group className='updatedBookStatus' controlId="newBookStatus">
            <Form.Label>New Rating</Form.Label>
            <Form.Control type='input' placeholder='Edit rating (1 to 5 stars)'></Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Update Book
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default UpdateBookForm;
