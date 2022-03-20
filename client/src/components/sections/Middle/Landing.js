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
            <List type={"topgain"}></List>
          </Col>
          <Col>
            <List type={"toploss"}></List>
          </Col>
          <Col>
            <Box type={"nifty50"}></Box>
            <Box type={"niftybnk"}></Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Landing;
