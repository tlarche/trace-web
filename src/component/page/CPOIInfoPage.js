import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CPOIInfoPage extends Component {
  render() {

    return (
    <nav>
      <p><h1>POI INFO</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/userTripPOI">back : revenir à la liste des trips et POI</Link></li>
      </ol>
  </nav>
    );
  }
}

export default CPOIInfoPage;
