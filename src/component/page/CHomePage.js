//import { Container, Row, Col } from 'reactstrap';
//import React from 'react';
//import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
//import '../../style/homePage.css';
import 'antd/dist/antd.css';
//import { Card } from 'antd';
//import { Layout } from 'antd';
//const { Header, Footer, Content } = Layout;


class CHomePage extends Component {
render() {

return (
  <div>
    <nav>
         <p><h1>HOMEPAGE</h1></p>
      <ol>
          <li><Link to="/">LOGO TRACE : revenir à la page d'accueil</Link></li>
          <li><Link to="/userLogin">login: identifiez-vous</Link></li>
          <li><Link to="/discover">discover : Rechercher des trips et POI</Link></li>
      </ol>
     </nav>
  </div>
       );
     }
   }
export default CHomePage;












// class CHomePage extends Component {
//   render() {
//
//     //
//     // function onChange(a, b, c) {
//     // console.log(a, b, c);
//     }
//
//
//     return (
//
// // <Carousel afterChange={onChange}>
// // <div><h3>1</h3></div>
// // <div><h3>2</h3></div>
// // <div><h3>3</h3></div>
// // <div><h3>4</h3></div>
// // </Carousel>,
//
//     );
//   }
// }
//
// export default CHomePage;


// <div>
//     <nav>
//       <p><h1>HOMEPAGE</h1></p>
//       <ol>
//           <li><Link to="/">TRACE</Link></li>
//           <li><Link to="/userLogin">login</Link></li>
//           <li><Link to="/discover">discover</Link></li>
//       </ol>
//   </nav>
// </div>
