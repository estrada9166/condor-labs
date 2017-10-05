import React, {Component} from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import Logo from './Logo'

const styles = {
  navBar: {
    marginBottom: 0
  },
  margin: {
    marginTop: 8    
  }
}

export default (props) => (
  <div>
    <Navbar collapseOnSelect style={styles.navBar} >
      <Navbar.Header>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem style={styles.margin} >Features</NavItem>
          <NavItem style={styles.margin} >Account Options</NavItem>
          <NavItem style={styles.margin} >Course Search</NavItem>
          <NavDropdown title="Organizations" id="basic-nav-dropdown" style={styles.margin}>
            <MenuItem>Organization 1</MenuItem>
            <MenuItem>Organization 2</MenuItem>
            <MenuItem>Organization 3</MenuItem>
          </NavDropdown>
          <NavItem style={styles.margin} >About</NavItem>
          <NavItem>
            <Button bsStyle="primary">7 day trial</Button>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)
