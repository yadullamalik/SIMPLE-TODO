import { TodoInput } from "./Todoinput";
import { useState } from "react";
import { nanoid } from "nanoid";
import { TodoList } from "./TodoList";
import "./Todo.css";

export const Todo = () => {
  const [todolist, setTodolist] = useState([]);
  const getData = (text) => {
    const payload = {
      title: text,
      status: false,
      id: nanoid(3),
    };
    setTodolist([...todolist, payload]);
  };
  const handleStatus = (id) => {
    setTodolist(
      todolist.map((e) => (e.id === id ? { ...e, status: !e.status } : e))
    );
  };
  return (
    <div className="TODO">
      {todolist.map((e) => (
        <TodoList todo={e} handleStatus={handleStatus} />
      ))}
      <TodoInput getData={getData} />
    </div>
  );
};
