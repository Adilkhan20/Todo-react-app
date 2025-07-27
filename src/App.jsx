import Heading from "./Components/Heading";
import Input from "./Components/Input";
import Todoitems from "./Components/Todoitems";
import "./App.css";
import { useState } from "react";
import Welcome from "./Components/Welcome";

function App() {
  const [initialValue, setValue] = useState([]);
  const onButtonClick = (name, date) => {
    let newValueObj = [...initialValue, { name: name, date: date }];
    setValue(newValueObj);
  };
  const onChangeEvent = (value) => {
    setValue(value);
  };
  const onDeleteItem = (itemName) => {
    let newValueObj = initialValue.filter((item) => item.name !== itemName);
    setValue(newValueObj);
  };

  return (
    <center className="Todo-container">
      <div className="App-container">
        <Heading />
        <Input onButtonClick={onButtonClick}></Input>
        <div className="item-container">
          {initialValue.length === 0 && (
            <Welcome Todoitems={initialValue}></Welcome>
          )}
          <Todoitems
            Todoitems={initialValue}
            handleDelete={onDeleteItem}
          ></Todoitems>
        </div>
      </div>
    </center>
  );
}

export default App;
