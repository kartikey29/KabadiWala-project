import React from "react";
import classes from "./StockInfo.module.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";

const StockInfo = (props) => {
  return (
    <div className={classes.box}>
      <span className={classes.topofsymbol}>
        <span className={classes.quantity}>Qty {props.quantity} :- </span>
        <span className={classes.avg}>Avg {props.buyPrice}</span>
      </span>
      <h3>{props.symbol}</h3>
      <span className={classes.invested}>
        Invested : {props.buyPrice * props.quantity}
      </span>
      <span className={classes.current}>
        Current : {props.buyPrice * props.quantity}
      </span>
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
