import React from "react";

const Todoitem = ({item,date,handleDelete}) => {



  console.log("feature color button changings ")
  
  return (
    <div className="container ">
      <div className="row kg-row justify-content-md-center">
        <div className="col col-lg-2">{item}</div>
        <div className="col-3">{date}</div>
        <div className="col-auto">
          <button type="button" className="btn btn-primary" onClick={()=>handleDelete(item)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todoitem;
