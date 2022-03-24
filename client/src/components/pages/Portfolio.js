import React from "react";
import InvestCurrentBox from "../StockPortfolio/InvestCurrentBox";
import StockInfo from "../StockPortfolio/StockInfo";
import { Row, Col } from "react-bootstrap";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <div style={{ width: "50%", margin: "0 auto", position: "relative" }}>
      <div className={classes.top}>
        <Row>
          <Col className={classes.col}>
            <InvestCurrentBox title={"Invested"}></InvestCurrentBox>
          </Col>
          <Col>
            <InvestCurrentBox title={"Current"}></InvestCurrentBox>
          </Col>
        </Row>
      </div>
      <StockInfo></StockInfo>
    </div>
  );
};

export default Portfolio;
