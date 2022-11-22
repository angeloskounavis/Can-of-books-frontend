import { Component } from 'react';

class Profile extends Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <h1>About the Creators</h1>
        <div className='Angelos'>
          <h3>Angelos Kounavis</h3>
          <p>Angelos lives in NY and was recently married.</p>
        </div>
        <div className='Ian'>
          <h3>Ian F. Shirley</h3>
          <p>Ian lives in Seattle with his wife and their dog & cat, named Sushi & Ramen.</p>
        </div>
      </>
    );
  }
}

export default Profile;
