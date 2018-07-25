import React from "react";
import { Row, Col } from "react-materialize";
import "../styling/Banner.css";

const Banner = () => {
  return (
    <div className="banner valign-wrapper center-align">
      <Row>
        <Col className="banner-text">
          <h2 className="banner-title">MTG Assistant</h2>
          <h4>Cataloging your entire collection made easy</h4>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
