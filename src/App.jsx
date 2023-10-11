import { useState } from "react";
import "./App.css";
import TodoItem from "./component/TodoItem";
import AddTodo from "./component/AddTodo";
import TodoHeader from "./component/TodoHeader";

function App() {
  const [todos, setTodos] = useState([]);
  const [doneTotal, setDoneTotal] = useState(0);
  const [todoName, setTodoName] = useState("");

  const taskDone = (id) => {
    const findIndex = todos.findIndex((todo) => todo.id === id); // 1
    const newArr = [...todos];
    newArr[findIndex] = {
      ...newArr[findIndex],
      isDone: !newArr[findIndex].isDone,
    };
    setTodos(newArr);
  };

  const addTodoItem = () => {
    const newTask = { id: Date.now(), name: todoName, isDone: false };
    setTodoName("");
    // const newTodos = [...todos, newTask];
    // setTodos(newTodos);
    setTodos([...todos, newTask]);
  };
  const change = (event) => {
    setTodoName(event.target.value);
  };

  const deleteItem = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo">
      <div className="app">
        <TodoHeader totalDone={doneTotal} total={todos.length} />
        <div>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              taskDone={taskDone}
              setTodos={setTodos}
              deleteItem={deleteItem}
            />
          ))}
        </div>
        <AddTodo
          todoName={todoName}
          addTodoItem={addTodoItem}
          change={change}
        />
      </div>
    </div>
  );
}
export default App;
