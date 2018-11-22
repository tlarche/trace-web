import React, { Component } from 'react'

import { Link } from 'react-router-dom';

class CCreateStepPage extends Component {
  render() {

    return (
  <nav>
    <p><h1>CREATE STEP</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/stepInfo">Add : création d'une step et revient à STEP Info</Link></li>
      </ol>
  </nav>
    );
  }
}

export default CCreateStepPage;
