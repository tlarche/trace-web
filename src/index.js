import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './style/index.css';

//Import react-Router (standard routing library for React / manage url in a single page application)
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Import page components
import CHomePage from './component/page/CHomePage.js';
import CDiscoverPage from './component/page/CDiscoverPage.js';
import CNotFoundPage from './component/page/CNotFoundPage.js';
import CUserLoginPage from './component/page/CUserLoginPage.js';
import CUserTripPOIPage from './component/page/CUserTripPOIPage.js';
import CTripInfoPage from './component/page/CTripInfoPage.js';
import CTripStepsPage from './component/page/CTripStepsPage.js';
import CStepInfoPage from './component/page/CStepInfoPage.js';
import CCreateStepPage from './component/page/CCreateStepPage.js';
import CPOIInfoPage from './component/page/CPOIInfoPage.js';
import CCreatePOIPage from './component/page/CCreatePOIPage.js';
import CCreateTripPage from './component/page/CCreateTripPage.js';
import CFooterPage from './component/header&footer/CFooterPage.js';

//First parent component:CUrlNavigation => url routing
const CUrlNavigation = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={CHomePage}/>
      <Route exact path='/discover' component={CDiscoverPage}/>
      <Route exact path='/userlogin' component={CUserLoginPage}/>
      <Route exact path='/userTripPOI' component={CUserTripPOIPage}/>
      <Route exact path='/tripInfo' component={CTripInfoPage}/>
      <Route exact path='/tripSteps' component={CTripStepsPage}/>
      <Route exact path='/stepInfo' component={CStepInfoPage}/>
      <Route exact path='/createStep' component={CCreateStepPage}/>
      <Route exact path='/POIInfo' component={CPOIInfoPage}/>
      <Route exact path='/createPOI' component={CCreatePOIPage}/>
      <Route exact path='/createTrip' component={CCreateTripPage}/>
      <Route exact path='/footer' component={CFooterPage}/>
      <Route component={CNotFoundPage}/>
    </Switch>
  </Router>
)
ReactDOM.render(
  <CUrlNavigation/>,
  document.getElementById('root')
);
