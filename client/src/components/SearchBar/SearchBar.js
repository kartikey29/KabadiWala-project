import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./search.module.css";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      query,
    };
    api
      .post("/search", data)
      .then((res) => {
        const response = JSON.parse(res);
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/result");
  };

  return (
    <div className={classes.formdiv}>
      <form onSubmit={submitHandler}>
        <input
          className={classes.input}
          placeholder="Search"
          type="text"
          label="search"
          value={query}
          onChange={inputHandler}
        ></input>
        <Button
          className={classes.submit}
          as="input"
          type="submit"
          value="Submit"
        />{" "}
      </form>
    </div>
  );
};

export default SearchBar;
