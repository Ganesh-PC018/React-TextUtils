import React, { useState } from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    setText(text.toUpperCase());
    props.showAlert("Data converted to UpperCase", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleLowerClick = () => {
    setText(text.toLowerCase());
    props.showAlert("Data converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    setText("");
    props.showAlert("Data has been cleared", "danger");
  };

  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div className={`bg-${props.mode}`} style={{ minHeight: "100vh", padding: "20px" }}>
      <div className="container">
        <h2 className="my-3" style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            onChange={handleOnChange}
            id="exampleFormControlTextarea1"
            rows="8"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "black",
              color: props.mode === "light" ? "black" : "white",
              borderColor: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick} disabled={text.trim() === ""}>
          Convert to Uppercase
        </button>
        <button className="btn btn-warning mx-2" onClick={handleLowerClick} disabled={text.trim() === ""}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick} disabled={text.trim() === ""}>
          Clear Data
        </button>
      </div>
      <div className="container" style={{ color: props.mode === "light" ? "black" : "white" }}>
        <h2 className="my-3"><strong>Your Text Summary</strong></h2>
        <p>{wordCount} words and {text.length} characters</p>
        <p>{0.008 * wordCount} Minutes required to read.</p>
        <h2 className="my-3"><strong>Preview</strong></h2>
        <p>{text.length > 0 ? text : "Nothing to preview"}</p>
      </div>
    </div>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.func.isRequired,
};

TextForm.defaultProps = {
  heading: "Text Analyzer",
};
