import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';

const styles = {
  navBar: {
    marginBottom: 0,
    height: 10,
    borderRadius: 0
  },
  support: {
    color: 'white'
  },
  login: {
    color: '#00CC66'
  }
}

export default (props) => (
  <div>
    <Navbar inverse collapseOnSelect style={styles.navBar} >
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>
            <span className='glyphicon glyphicon-map-marker'></span>
            Florida
          </NavItem>
          <NavItem><span style={styles.support} >Support Center</span></NavItem>
          <NavItem><span style={styles.login} >Login</span></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
