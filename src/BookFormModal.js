import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import { Modal, Form, Button} from 'react-bootstrap';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isModal: false
    };
  }

  render() {
    return (
      <Modal
        show={this.props.isModal}
        onHide={this.props.onHide}
        className='add-book-modal'
      >
        <Form onSubmit= {this.props.handleSubmitBook}>
          <Form.Group className='newBookTitle' controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control type='input' placeholder='Enter book title'></Form.Control>
          </Form.Group>
          <Form.Group className='newBookDescription' controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type='textarea' placeholder='Enter book description'></Form.Control>
          </Form.Group>
          <Form.Group className='newBookStatus' controlId="newBookStatus">
            <Form.Label>Rating</Form.Label>
            <Form.Control type='input' placeholder='How many stars? (1 to 5)'></Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit New Book
          </Button>
        </Form>
      </Modal>
    );
  }
}

export default BookFormModal;


