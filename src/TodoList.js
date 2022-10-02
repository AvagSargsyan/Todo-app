import TodoItem from "./TodoItem";

function TodoList(todos, onChange, onDelete) {
    const container = document.createElement('div');
    container.classList.add('todo-list');

    todos.forEach(todo => {
        container.appendChild(TodoItem(todo, (value) => {
            todo.isCompleted = value;
            onChange();
        }, onDelete));
    })

    return container;
}

export default TodoList;
