import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CNotFoundPage extends Component {
  render() {

    return (
      <nav>
        <p><h1>404 not found</h1></p>
        <p><h1><Link to="/">LOGO TRACE :  revenir à la page d'accueil</Link></h1></p>
    </nav>
    );
  }
}
export default CNotFoundPage;
