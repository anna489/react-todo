import React from "react";

const AddTodo = ({ todoName, change, addTodoItem }) => {
  return (
    <div className="add">
      <input type="text" placeholder="Write your todos..." onChange={change} value={todoName} />
      <div>
        <button className="addBtn" onClick={addTodoItem}>Add</button>
      </div>
    </div>
  );
};

export default AddTodo;