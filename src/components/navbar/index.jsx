import React from "react";
import { useDispatch } from "react-redux";
import {swithTheme} from "../../redux/actions/theme_switcher";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

function NavBar() {
  const dispatch = useDispatch();
 
  return (
    <Navbar className="py-3 px-0">
      <Container fluid>
        <Navbar.Brand>Where in the world?</Navbar.Brand>
        <div className="darkMode d-flex align-items-center justify-content-center" onClick={()=> dispatch(swithTheme())}>
          <FontAwesomeIcon icon={faMoon} className="ml-auto" />
          <span>dark mode</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
