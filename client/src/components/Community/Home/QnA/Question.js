import classes from "./Question.module.css";

import React from "react";

const Question = () => {
  return (
    <div className={classes.ques}>
      <header>
        <h2>Hello</h2>
        <span>posted by :- kartikey Sood</span>
      </header>
      <div className={classes.body}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          pulvinar facilisis augue sed ultricies. Etiam egestas ultrices magna,
          nec porttitor risus consectetur a. ....ReadMore
        </p>
      </div>
    </div>
  );
};

export default Question;
