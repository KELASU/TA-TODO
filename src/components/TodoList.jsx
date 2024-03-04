import { useState } from "react";
import { TodoItem } from "./TodoItem";

export function TodoList({ todos, editTodo, showUnchecked, toggleUnchecked, toggleTodo, deleteTodo }) {
  const [editId, setEditId] = useState("");
  function toggleEditId(id){
    if (editId === id){
      setEditId("");
      return;
    }

    setEditId(id)
  }

  function todosFilter(){
    return showUnchecked ? todos.filter((todo) => !todo.completed) : todos;
  }

  return (
    <div className="h-3/5 px-10 py-2 my-5 bg-black">
      <div className="flex items-center justify-between">
        <h1 className="header font-serif">Todo List</h1>
        <button className={"btn font-serif text-xs text-cyan-500 " + (showUnchecked && "btn-danger animate-spin")} onClick={() => toggleUnchecked()}>Only show unchecked</button>
      </div>
      <ul className="list overflow-ellipsis">
        <div className="font-serif">{todos.length === 0 && "No todos"}</div>
        {(todosFilter()).map((todo) => {
          return (
            <TodoItem
              {...todo}
              key={todo.id}
              editId={editId}
              toggleEditId={toggleEditId}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
            />
          );
        })}
      </ul>
    </div>
  );
}