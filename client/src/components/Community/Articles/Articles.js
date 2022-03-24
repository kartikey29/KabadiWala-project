import React from "react";
import CardCustom from "../../Card/CardCustom";
import { Row, Col } from "react-bootstrap";

const Article = () => {
  return (
    <>
      <Row>
        <Col>
          <CardCustom />
        </Col>
        <Col>
          <CardCustom />
        </Col>
        <Col>
          <CardCustom />
        </Col>
        <Col>
          <CardCustom />
        </Col>
        <Col>
          <CardCustom />
        </Col>
        <Col>
          <CardCustom />
        </Col>
      </Row>
    </>
  );
};

export default Article;
