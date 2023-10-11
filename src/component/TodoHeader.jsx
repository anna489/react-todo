import React from "react";

const TodoHeader = ({ totalDone = 0, total }) => {
  return (
    <div className="head">
        <h1>Todo List</h1>
        <p>{totalDone}/{total}</p>
    </div>
    
  );
};

export default TodoHeader;