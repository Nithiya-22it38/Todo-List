import TodoEdit from "./TodoEdit";
import TodoDelete from "./TodoDelete";

export default function TodoList({ todos, updateTodo, deleteTodo }) {
    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id} className="todo">
                    <span className={todo.completed ? "completed" : ""}>{todo.task}</span>
                    <div className="actions">
                        <TodoEdit todo={todo} updateTodo={updateTodo} />
                        <TodoDelete todoId={todo.id} deleteTodo={deleteTodo} />
                    </div>
                </li>
            ))}
        </>
    );
}
