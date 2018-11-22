import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CCreateTripPage extends Component {
  render() {

    return (
    <nav>
       <p><h1>CREATE TRIP </h1></p>
       <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/userTripPOI">Back : Création d'un trip et revient à trip info</Link></li>
       </ol>
     </nav>
    );
  }
}
export default CCreateTripPage;
