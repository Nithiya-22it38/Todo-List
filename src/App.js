import { useState } from "react";
import TodoCreate from "./components/TodoCreate";
import TodoList from "./components/TodoList";
import "./App.css";

export default function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (task) => {
        setTodos([...todos, { id: Date.now(), task, completed: false }]);
    };

    const updateTodo = (id, updatedTask) => {
        setTodos(todos.map(todo => (todo.id === id ? { ...todo, task: updatedTask } : todo)));
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div className="main">
            <h1>To-Do List</h1>
            <TodoCreate addTodo={addTodo} />
            <ul className="todo-list">
                <TodoList todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            </ul>
        </div>
    );
}