function TodoFooter(todos, onDelete) {
    const container = document.createElement('div');
    container.classList.add('todo-footer');

    const completedTodosCount = todos.filter(todo => todo.isCompleted).length;

    container.innerHTML = `
        <span>${completedTodosCount} / ${todos.length} Completed </span>
        <button>Clear Completed</button>
    `
    const clearBtn = container.querySelector('button');
    clearBtn.addEventListener('click', e => {
        onDelete();
    })

    return container;
}

export default TodoFooter;
