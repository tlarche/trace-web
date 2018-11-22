import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CStepInfo extends Component {
  render() {

    return (
      <nav>
          <p><h1>STEP INFO : liste des steps d'un trip</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/tripInfo">Back : revenir aux infos d'un trips</Link></li>
          <li><Link to="/createStep">créer un step</Link></li>
      </ol>
    </nav>
    );
  }
}

export default CStepInfo;
