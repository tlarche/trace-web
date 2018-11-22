import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class CDiscoverPage extends Component {
  render() {

      return(
      <nav>
        <p><h1>DISCOVER : Rechercher des trips ou POI</h1></p>
        <ol>
         <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
         <li><Link to="/userLogin">login : Identifiez-vous </Link></li>
        </ol>
      </nav>
    );
   }
}export default CDiscoverPage;
