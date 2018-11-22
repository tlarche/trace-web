import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CTripStepsPage extends Component {
  render() {

    return (
      <nav>
        <p><h1>STEPS LIST OF A TRIP</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/stepInfo">step info</Link></li>
          <li><Link to="/createStep">create a step</Link></li>
          <li><Link to="/tripInfo">BACK : revenir aux infos d'un trip</Link></li>
      </ol>
    </nav>
    );
  }
}

export default CTripStepsPage;
