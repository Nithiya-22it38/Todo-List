import { useState } from "react";

export default function TodoCreate({ addTodo }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return;
        addTodo(task);
        setTask("");
    };

    return (
        <form onSubmit={handleSubmit} className="todo-create">
            <input
                type="text"
                placeholder="Add a new task"
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}
