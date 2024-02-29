import "../App.css";
import { useState } from "react";
import { TodoForm } from "../components/TodoForm";
import { TodoList } from "../components/TodoList";
'import { EditTodoForm } from "../components/EditTodoForm";'
function Todo() {
  const [todos, setTodos] = useState([]);
  const [isactive, setIsactive] = useState(false);

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }

        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function editTodo(id, title) {
    if(title === "") return;
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === id) {
          return { ...todo, title };
        }

        return todo;
      })
    })
  }

  return (
    <>
      <div className="h-screen p-5 bg-gradient-to-br from-gray-900 to-slate-800">
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} setTodos={setTodos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} editTodo={editTodo}/>
      </div>
    </>
  );
}

export default Todo;