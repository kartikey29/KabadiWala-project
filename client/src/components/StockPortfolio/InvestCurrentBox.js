import React from "react";
import classes from "./investedCurrent.module.css";

const InvestCurrentBox = (props) => {
  return (
    <div className={classes.box}>
      <h3>{props.title}</h3>
      <p>{props.total}</p>
    </div>
  );
};

export default InvestCurrentBox;
