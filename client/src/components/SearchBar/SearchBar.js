import React, { useState } from "react";
import { Button } from "react-bootstrap";
import classes from "./search.module.css";
import api from "../../config/api";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [resDat, setResDat] = useState("");
  const inputHandler = (event) => {
    setQuery(event.target.value);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const data = {
      query,
    };
    api
      .post(
        "https://f97aec65-2ae6-41d9-9ddb-9d4a0f5082f3.mock.pstmn.io/getData",
        data
      )
      .then((res) => {
        console.log(res);
        const response = res;
        setResDat(response);
        // navigate("/result", { state: { data: resDat } });
      })
      .catch((err) => {
        console.log(err);
      });
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
