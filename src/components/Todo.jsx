import React, { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

let todoJSON = [
  {
    id: 1,
    title: "Make Lunch",
    isCompleted: true,
  },
  {
    id: 2,
    title: "Learn React",
    isCompleted: false,
  },
  {
    id: 3,
    title: "Fill this TodoList",
    isCompleted: false,
  },
];
const Todo = () => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState(todoJSON);
  const [warning, setWarning] = useState("");
  return (
    <>
      <p className="text-center font-semibold text-3xl pt-10">
        Todo Application
      </p>
      <TodoForm
        warning={warning}
        setWarning={setWarning}
        input={input}
        todos={todos}
        setTodos={setTodos}
        setInput={setInput}
      />
      <TodoList setTodos={setTodos} todos={todos} />
    </>
  );
};

export default Todo;
