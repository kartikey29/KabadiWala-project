import React from "react";
import classes from "./NavBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const NavigationBar = () => {
  return (
    <Navbar
      className={classes.colornav}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className={classes.brand} as={Link} to="/">
          LearnOinvest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/resources">
              Resources
            </Nav.Link>
            <Nav.Link as={Link} to="/community">
              Community
            </Nav.Link>
          </Nav>
          <Nav>
            <div className={classes.balance}>
              <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> 10000
            </div>
            <Nav.Link
              as={Link}
              to="/portfolio"
              className={classes.walletbtn}
              style={{ color: "white" }}
            >
              PortFolio
            </Nav.Link>

            <Nav.Link
              href="#deets"
              className={classes.login}
              style={{ color: "white" }}
            >
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
