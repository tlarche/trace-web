import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CUserLoginPage extends Component {
  render() {

    return(
  <nav>
    <p><h1>USER LOGIN</h1></p>
      <ol>
        <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
        <li><Link to="/userTripPOI">login validé : liste des trips et POI de l'utilisateur</Link></li>
      </ol>
  </nav>
    )
  }
}

export default CUserLoginPage;
