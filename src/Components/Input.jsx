import React, { useState } from "react";

const Input = ({ onButtonClick, onChangeEvent }) => {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDatechange = (event) => {
    setTodoDate(event.target.value);
  };
  const buttonClickHandle = () => {
    if (todoDate && todoName !== "") {
      onButtonClick(todoName, todoDate);
      setTodoDate("");
      setTodoName("");
    }
  };

  return (
    <div className="container">
      <div className="row  kg-row justify-content-md-center">
        <div className="col col-lg-2">
          <input
            type="text"
            placeholder="Enter Todo here"
            value={todoName}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-3">
          <input type="date" onChange={handleDatechange} value={todoDate} />
        </div>
        <div className="col-auto">
          <button
            type="button"
            className="btn btn-success"
            onClick={buttonClickHandle}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Input;
