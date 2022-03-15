import classes from "./Box.module.css";

import React from "react";

const Box = () => {
  return (
    <div className={classes.box}>
      <h1>Nifty 50</h1>
      <p>1.4</p>
    </div>
  );
};

export default Box;
