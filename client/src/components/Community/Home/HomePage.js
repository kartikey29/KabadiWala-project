import React from "react";
import Question from "./QnA/Question";
import classes from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <div className={classes.holder}>
        <h1>QnA</h1>
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
        <Question />
      </div>
    </>
  );
};

export default HomePage;
