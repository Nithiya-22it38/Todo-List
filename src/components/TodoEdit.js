import { useState } from "react";

export default function TodoEdit({ todo, updateTodo }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(todo.task);

    const handleUpdate = () => {
        updateTodo(todo.id, newTask);
        setIsEditing(false);
    };

    return isEditing ? (
        <div className="todo-edit">
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
            />
            <button onClick={handleUpdate}>Save</button>
        </div>
    ) : (
        <button onClick={() => setIsEditing(true)}>Edit</button>
    );
}
