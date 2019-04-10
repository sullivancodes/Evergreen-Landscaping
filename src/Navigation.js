import './css/fonts.css';
import React from 'react';
import { Link } from 'react-router-dom';
import EvergreenLogo from './images/EvergreenLogo.png';
import { Navbar, Nav, NavItem  } from 'react-bootstrap';
import './css/navigationstyle.css';

let aboveStyle = {
  zIndex: 100
}


export class Navigation extends React.Component {
    render() {
        return(

          <Navbar inverse collapseOnSelect className="nav" style={aboveStyle}>
<Navbar.Header>
  <Navbar.Brand>
    <a href="#brand"><img src={EvergreenLogo} className="company-logo"/></a>
  </Navbar.Brand>
  <Navbar.Toggle className="nav-menu"/>
</Navbar.Header>
<Navbar.Collapse>
  <Nav>

  </Nav>
  <Nav pullRight>
    <NavItem eventKey={1} href="#" className="nav-li">
      <Link to="/" className="link ">Home</Link>
    </NavItem>
    <NavItem eventKey={2} href="#" className="nav-li">
      <Link to="/about" className="link">About</Link>
    </NavItem>
    <NavItem eventKey={3} href="#" className="nav-li">
      <Link to="/services" className="link">Services</Link>
    </NavItem>
    <NavItem eventKey={4} href="#" className="nav-li">
      <Link to="/portfolio" className="link">Portfolio</Link>
    </NavItem>
    <NavItem eventKey={5} href="#" className="nav-li">
      <Link to="/contact" className="link">Contact</Link>
    </NavItem>

  </Nav>
</Navbar.Collapse>
</Navbar>


        );
    }
}
