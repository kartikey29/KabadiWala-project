import React from "react";
import { useSelector } from "react-redux";
import InvestCurrentBox from "../StockPortfolio/InvestCurrentBox";
import StockInfo from "../StockPortfolio/StockInfo";
import { Row, Col } from "react-bootstrap";
import classes from "./Portfolio.module.css";

const Portfolio = () => {
  const invested = useSelector((state) => {
    return state.portfolio.invested;
  });
  const portfolio = useSelector((state) => {
    return state.portfolio;
  });
  return (
    <div style={{ width: "50%", margin: "0 auto", position: "relative" }}>
      <div className={classes.top}>
        <Row>
          <Col className={classes.col}>
            <InvestCurrentBox
              title={"Invested"}
              total={invested}
            ></InvestCurrentBox>
          </Col>
          <Col>
            <InvestCurrentBox
              title={"Current"}
              total={invested}
            ></InvestCurrentBox>
          </Col>
        </Row>
      </div>
      {portfolio.map((element) => {
        return (
          <StockInfo
            symbol={element.stock_name}
            quantity={element.quantity}
            buyPrice={element.buy_price}
          />
        );
      })}
    </div>
  );
};

export default Portfolio;
