import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import List from "../../List/List";
import Box from "../../Box/Box";
import classes from "./middle.module.css";

const Landing = () => {
  return (
    <div className={classes.middle}>
      <Container>
        <Row>
          <Col>
            <List></List>
          </Col>
          <Col>
            <List></List>
          </Col>
          <Col>
            <Box></Box>
            <Box></Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
