import axios from 'axios';
import React from 'react';
import BookFormModal from './BookFormModal';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Container} from 'react-bootstrap';
import UpdateBookForm from './UpdateBookForm';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      isAddBookModal: false,
      isUpdateModal: false,
      updatedBook: null
    };
  }

  getBooks = async () => {
    try {
      let bookResults = await axios.get(`${process.env.REACT_APP_SERVER}/books`);
      this.setState({
        books: bookResults.data
      });
      console.log('bookresults:', bookResults);
    } catch(error) {
      console.log('GET Error: ', error.response.data);
    }
  };

  postBook = async (aBook) => {
    console.log('postBook' );
    try {
      let addedBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, aBook);
      console.log(addedBook);
      this.setState({
        books: [...this.state.books, addedBook.data]
      });
    } catch(error) {
      console.log('POST Error: ', error.response.data);
    }
  };

  deleteBook = async (id) => {
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${id}`;
      await axios.delete(url);
      let updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({
        books: updatedBooks
      });
    } catch(err) {
      console.log('DELETE Error:', err.response.data);
    }
  };

  updateBook = async (bookToUpdate) => {
    console.log(bookToUpdate);
    try {
      let url = `${process.env.REACT_APP_SERVER}/books/${bookToUpdate._id}`;
      let updatedBookObj = await axios.put(url, bookToUpdate);

      // find the book we updated in state, replace w/ data we got back from DB
      let updatedBooksArr = this.state.books.map(book => {
        return book._id === bookToUpdate._id
          ? updatedBookObj.data
          : book;
      });
      this.setState({
        books: updatedBooksArr
      });
    } catch(err) {
      console.log('PUT Error:', err.response.data);
    }
  };

  handleOpenFormModal = (e) => {
    e.preventDefault();
    this.setState({
      isAddBookModal: true
    });
  };

  handleCloseFormModal = (e) => {
    e.preventDefault();
    this.setState({
      isAddBookModal: false
    });
  };

  handleOpenUpdateModal = () => {
    // e.preventDefault();
    console.log('inside handleOpenUpdateModel: ', this.state.updatedBook);
    this.setState({
      isUpdateModal: true
    });
  };

  handleCloseUpdateModal = () => {
    console.log('closing modal');
    this.setState({
      isUpdateModal: false
    });
  };

  handleSubmitBook = (e) => {
    console.log('handleSub');
    e.preventDefault();
    let newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.newBookStatus.value
    };
    this.postBook(newBook);
    this.handleCloseFormModal(e);
  };

  handleUpdateBookSubmit = (e) => {
    console.log('handleUpdate');
    e.preventDefault();
    let bookToUpdate = {
      title: e.target.title.value || this.state.updatedBook.title,
      description: e.target.description.value || this.state.updatedBook.description,
      status: e.target.newBookStatus.value || this.state.updatedBook.status,
      _id: this.state.updatedBook._id,
      __v: this.state.updatedBook.__v
    };
    this.updateBook(bookToUpdate);
    this.handleCloseUpdateModal();
    console.log('updateBook ran');
  };

  handleUpdateBook = (bookToUpdate) => {
    console.log(bookToUpdate);
    this.setState({
      updatedBook: bookToUpdate
    }, this.handleOpenUpdateModal);
    // this.handleOpenUpdateModal();
    console.log('handle open update modal is called');
  };

  /* TODO: Make a GET request to your API to fetch all the books from the database  */
  componentDidMount() {
    this.getBooks();
  }

  render() {
    console.log(this.state.books);
    let carouselItems = this.state.books.map((book) => (
      <Carousel.Item key={book._id}>
        <img
          className="placeholder"
          src="https://i.ibb.co/JxFXf2z/book.jpg"
          alt="book"
        />
        <Carousel.Caption>
          <h3>{book.title}</h3>
          <p>{book.description}</p>
          <p>{book.status}</p>
          <Button
            onClick={() => this.deleteBook(book._id)}
            variant="primary"
            type="submit"
          >
            Delete Book
          </Button>
          <Button
            onClick={() => this.handleUpdateBook(book)}
            type="button"
            className="update-book-button"
          >
            Update Book
          </Button>
        </Carousel.Caption>
      </Carousel.Item>
    ));
    /* TODO: render all the books in a Carousel */



    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {(this.state.books.length > 0) ? (
          <Container>
            <Carousel>
              {carouselItems}
            </Carousel>
            <Button
              onClick={this.handleOpenFormModal}
              type="button"
              className="add-book-button"
            >
              Add a book
            </Button>
            <BookFormModal
              isAddBookModal = {this.state.isAddBookModal}
              handleSubmitBook = {this.handleSubmitBook}
            >
            </BookFormModal>
            <UpdateBookForm
              show={this.state.isUpdateModal}
              onHide={this.handleCloseUpdateModal}
              submit={this.handleUpdateBookSubmit}
              book={this.state.updatedBook}
            >
            </UpdateBookForm>
          </Container>
        ) : (
          <h3>No Books Found :(</h3>
        )}
      </>
    );
  }
}

export default BestBooks;
