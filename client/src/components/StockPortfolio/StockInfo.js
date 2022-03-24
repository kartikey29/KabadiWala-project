import React from "react";
import classes from "./StockInfo.module.css";
import { Button } from "react-bootstrap";

const StockInfo = () => {
  return (
    <div className={classes.box}>
      <span className={classes.topofsymbol}>
        <span className={classes.quantity}>Qty 4 :- </span>
        <span className={classes.avg}>Avg 220</span>
      </span>
      <h3>Tata</h3>
      <span className={classes.invested}>Invested : 2000rs</span>
      <span className={classes.current}>Current : 230rs</span>
      <form className={classes.form}>
        <input
          type="number"
          min={1}
          defaultValue={1}
          className={classes.number}
        ></input>
        <Button className={classes.sell} variant="danger">
          Sell
        </Button>
      </form>
    </div>
  );
};

export default StockInfo;
