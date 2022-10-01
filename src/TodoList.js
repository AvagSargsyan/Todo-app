import TodoItem from "./TodoItem";

function TodoList(todos, onChange, onDelete) {
    const container = document.createElement('div');

    todos.forEach(todo => {
        container.appendChild(TodoItem(todo, (value) => {
            todo.isCompleted = value;
            onChange();
        }, onDelete));
    })

    return container;
}

export default TodoList;
