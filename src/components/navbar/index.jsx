import React from "react";
import { Navbar, Container } from "react-bootstrap";

import "./styles.scss";

function NavBar() {
  return (
    <Navbar className="py-3 px-0">
      <Container fluid>
        <Navbar.Brand>Where in the world?</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBar;
