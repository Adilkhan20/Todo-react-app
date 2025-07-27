import React from "react";
import Todoitem from "./Todoitem";

const Todoitems = ({ Todoitems,handleDelete}) => {
  return (
    <>
      {Todoitems.map((item, index) => (
        <Todoitem key={index} item={item.name} date={item.date} handleDelete={handleDelete} />
      ))}
    </>
  );
};

export default Todoitems;
