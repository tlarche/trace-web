import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cmap from './Cmap.js';

class CCreatePOIPage extends Component {
  render() {

    return (
<div>
<p><h1>CREATE POI</h1></p>
      <nav>
        <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/POIInfo">Add : ajoute le POI et revient à la page POI Info</Link></li>
        </ol>
      </nav>
      // <Cmap/>
  </div>
    );
  }
}

export default CCreatePOIPage;
