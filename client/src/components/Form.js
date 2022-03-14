import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [authorName, setAuthorName] = useState("");
  const [bookName, setBookName] = useState("");

  const authorNameHandler = (event) => {
    setAuthorName(event.target.value);
  };

  const bookNameHandler = (event) => {
    setBookName(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("form data posted");
    const data = {
      authorName,
      bookName,
    };

    const postReq = async () => {
      try {
        const res = await axios.post("https://localhost:8080/data", data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    postReq();
  };
  return (
    <>
      <form  onSubmit={submitHandler}>
        <label>
          Enter author name
          <input
            id="authorName"
            type="text"
            value={authorName}
            onChange={authorNameHandler}
          ></input>
        </label>
        <label>
          Enter book name
          <input
            id="bookName"
            type="text"
            value={bookName}
            onChange={bookNameHandler}
          ></input>
        </label>
        <button type="submit">
          submit
        </button>
      </form>
    </>
  );
};

export default Form;
