import React from 'react';
// import axios from 'axios';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import About from './About';
import { withAuth0 } from '@auth0/auth0-react';
import Welcome from './Welcome';
import Profile from './Profile';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Header />
          <Routes>
            <Route
              exact path="/"
              element={this.props.auth0.isAuthenticated ? <BestBooks /> : <Welcome/>}>
            </Route>
            <Route
              exact path='/about'
              element={<About />}
            >
            </Route>
            <Route
              exact path='/profile'
              element={<Profile />}
            >
            </Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
