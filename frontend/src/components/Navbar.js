import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

// import CurrentUserName from '../containers/CurrentUserName';
import ViewLink from '../containers/ViewLink';
import ViewNavItem from '../containers/ViewNavItem';

export default function MainNavbar() {
  return (
    <Navbar className="navbar-fixed-top">
      <Navbar.Header>
        <Navbar.Brand>
          <ViewLink root="Welcome" className="navbar-brand">
            Welcome
          </ViewLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <ViewNavItem root="AllMaterialsList"> Materials </ViewNavItem>
          <ViewNavItem root="NewMaterial"> [+] </ViewNavItem>
          <ViewNavItem root="AllPatronsList"> Patrons </ViewNavItem>
          <ViewNavItem root="NewPatron"> [+] </ViewNavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
