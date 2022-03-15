import React from "react";
import classes from "./wapper.module.css";
const Wrapper = (props) => {
  return <div className={classes.wrap}>{props.children}</div>;
};

export default Wrapper;
