import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import CardCustom from "../Card/CardCustom";

const Resources = () => {
  return (
    <Container>
      <Row>
        <Col>
          <CardCustom
            title={"Bear vs Bull"}
            summary={"Learn about what is Bull market and Bear market"}
            src={require("../pictures/1.jpg")}
          ></CardCustom>
        </Col>
        <Col>
          <CardCustom
            title={"Bear vs Bull"}
            summary={"Learn about what is Bull market and Bear market"}
            src={require("../pictures/1.jpg")}
          ></CardCustom>
        </Col>
      </Row>
    </Container>
  );
};

export default Resources;
