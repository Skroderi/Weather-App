import React from "react";
import "../stylesheet/Form.css";
const Form = ({
  submit,
  value,
  change,
  isSearchButtonDisabled,
  location,
  isButtonDisabled
}) => {
  return (
    <>
      <form id="form" onSubmit={submit}>
        <input
          type="text"
          value={value}
          onChange={change}
          placeholder="ENTER CITY"
        />
      </form>
      <button form="form" disabled={isSearchButtonDisabled}>
        Search
      </button>
      <button
        onClick={location}
        className="locationBtn"
        disabled={isButtonDisabled}
      >
        Get Location
      </button>
    </>
  );
};

export default Form;
