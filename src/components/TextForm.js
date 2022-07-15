import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const [myStyle, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const changeTheme = () => {
    if (myStyle.color === "black") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  const handletoLower = () => {
    setText(text.toLowerCase());
  };

  const handleTopUpper = () => {  
    setText(text.toUpperCase());
  };

  const handleonchange = (event) => {
    console.log(event.target.value);
    setText(event.target.value);
  };

  const handleToClear = () => {
    setText("");
  };
  return (
    <>
      {/* <div className="container" style={myStyle}> */}
      <div className="container">
        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            {props.title}
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            onChange={handleonchange}
            value={text}
            placeholder="Enter text here"
          ></textarea>
        </div>
        <button className="btn btn-primary mr-3" onClick={handleTopUpper}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-3" onClick={handletoLower}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mr-3" onClick={handleToClear}>
          Clear Text
        </button>
        {/* <button className="btn btn-primary mx-3" onClick={changeTheme} > Change Theme</button> */}
      </div>
      <div className="container my-5">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        {/* <p>{ 0.008 * text.split(" ").length} Minutes to read</p> */}
        <h1>Preview</h1>
        <p className="mb-3">{text.length > 0 ? text : "Please enter text to format"}</p>
      </div>
    </>
  );
}
