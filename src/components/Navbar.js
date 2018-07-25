import React from "react";
import { Navbar, Row, Col, Button } from "react-materialize";
import "../styling/Navbar.css";

const Nav = props => {
  return (
    <Navbar className="nav-brand">
    <Row className="nav-row valign-wrapper">
      <Col s={4} className="nav-col center-align">
        <Button className="nav-items" waves="light">
          Getting started
        </Button>
      </Col>
      <Col s={4} className="nav-col center-align logo-col">
        <img
          className="mtg-logo"
          src="https://s3-us-west-2.amazonaws.com/mtg-assistant/mtg_logo.png"
          alt="Magic: The Gathering Logo"
        />
      </Col>
      <Col s={4} className="nav-col center-align">
        <Button className="nav-items" waves="light">
          Login
        </Button>
      </Col>
      </Row>
    </Navbar>
  );
};

export default Nav;
