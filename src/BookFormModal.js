import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class BookFormModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };
  }
  render() {
    return (
      <Modal
        show={this.props.isModal}
        onHide={this.props.onHide}
        className='add-book-modal'
      >
        <Form onSubmit={this.handleSubmitBook}>
          <Form.Group className='newBookTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control type='input' placeholder='Enter book title'></Form.Control>
          </Form.Group>
          <Form.Group className='newBookDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control type='textarea' placeholder='Enter book description'></Form.Control>
          </Form.Group>
          <Form.Group className='newBookStatus'>
            <Form.Label>Rating</Form.Label>
            <Form.Control type='number' placeholder='How many stars? (1 to 5)'></Form.Control>
          </Form.Group>
          <Button variant='primary' type='submit'>
            Submit New Book
          </Button>
        </Form>
        {/* {this.props.isModal &&
        <p>success!</p>} */}
      </Modal>
    );
  }
}

export default BookFormModal;


