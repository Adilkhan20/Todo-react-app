import React from "react";

const Todoitem = ({item,date,handleDelete}) => {
  
  return (
    <div className="container ">
      <div className="row kg-row justify-content-md-center">
        <div className="col col-lg-2">{item}</div>
        <div className="col-3">{date}</div>
        <div className="col-auto">
          <button type="button" className="btn btn-success" onClick={()=>handleDelete(item)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
