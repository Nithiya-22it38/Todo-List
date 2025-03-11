export default function TodoDelete({ todoId, deleteTodo }) {
    return (
        <button onClick={() => deleteTodo(todoId)}>Delete</button>
    );
}