import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CUserTripPOIPage extends Component {
  render() {

    return (
      <nav>
        <p><h1>USER TRIP & POI list</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/tripInfo">trip info</Link></li>
          <li><Link to="/createTrip">create trip</Link></li>
          <li><Link to="/POIInfo">POI info</Link></li>
          <li><Link to="/createPOI">create POI</Link></li>
      </ol>
  </nav>
    );
  }
}

export default CUserTripPOIPage;
