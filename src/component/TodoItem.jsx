import React from "react";

const TodoItem = ({ todo, taskDone, deleteItem }) => {
  return (
    <div className="items">
      <div className="lists">
        <input
          id="check"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => {
            taskDone(todo.id);
          }}
        />
        <label for="check"></label>
        <h4 style={{ color: todo.isDone ? "#212F3D" : "white" }}>
          {todo.name}
        </h4>
        <div className="btn">
          <button
            className="deleteBtn"
            onClick={() => deleteItem(todo)}></button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
