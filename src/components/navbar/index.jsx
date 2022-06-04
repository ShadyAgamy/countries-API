import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {swithTheme} from "../../redux/actions/theme_switcher";
import { Navbar, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import "./styles.scss";

function NavBar() {
  const dispatch = useDispatch();
  const darkTheme = useSelector((state) => state.theme_switcher.darkMode);
 
  return (
    <Navbar className="py-3 px-0">
      <Container fluid>
        <Navbar.Brand>Where in the world?</Navbar.Brand>
        <div className="darkMode d-flex align-items-center justify-content-center" onClick={()=> dispatch(swithTheme())}>
          <FontAwesomeIcon icon={faMoon} className="ml-auto" />
          <span>{darkTheme ? 'light mode' : 'dark mode'}</span>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
