import React, { useState } from "react";
import "./App.css";
import { TodoList } from "./TodoList";

const initialTodos: Array<Todo> = [
  { text: "Walk", complete: true },
  { text: "Eat", complete: false },
];
function App() {
  const [todos, setTodos] = useState(initialTodos);
  const toggleTodo: ToggleTodo = (selectedTodo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="App">
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
