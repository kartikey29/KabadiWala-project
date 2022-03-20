import React from "react";
import classes from "./NavBar.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWallet, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
const NavigationBar = () => {
  return (
    <Navbar
      className={classes.colornav}
      collapseOnSelect
      expand="lg"
      variant="dark"
    >
      <Container>
        <Navbar.Brand className={classes.brand} href="/">
          LearnOinvest
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Resources</Nav.Link>
            <Nav.Link href="#pricing">Level</Nav.Link>
          </Nav>
          <Nav>
            <div className={classes.balance}>
              <FontAwesomeIcon icon={faIndianRupeeSign}></FontAwesomeIcon> 10000
            </div>
            <Nav.Link
              href="#deets"
              className={classes.walletbtn}
              style={{ color: "white" }}
            >
              <FontAwesomeIcon
                icon={faWallet}
                className={classes.walleticon}
              ></FontAwesomeIcon>
              Wallet
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
