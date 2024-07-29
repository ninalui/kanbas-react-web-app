import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <li className="list-group-item d-flex align-items-center">
      <input className="form-control me-2" value={todo.title}
        onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value })) }/>
      <button className="btn btn-warning m-1 float-end" onClick={() => dispatch(updateTodo(todo))}
              id="wd-update-todo-click"> Update </button>
      <button className="btn btn-success m-1 float-end" onClick={() => dispatch(addTodo(todo))}
              id="wd-add-todo-click"> Add </button>
    </li>
  );
}
