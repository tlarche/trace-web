import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CTripInfo extends Component {
  render() {

    return (
      <nav>
        <p><h1>TRIP INFO</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/tripSteps">View step</Link></li>
          <li><Link to="/userTripPOI">Back : Revenir à la liste des trips et POI</Link></li>
      </ol>
    </nav>
    );
  }
}

export default CTripInfo;
