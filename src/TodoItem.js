function TodoItem(todo, onChange, onDelete) {
    const container = document.createElement('div');

    container.innerHTML = `
        <label>
            <input type="checkbox" ${todo.isCompleted ? 'checked' : ''}/>
            <span>${todo.label}</span>
            <button>&times;</button>
        </label>
    `

    const input = container.querySelector('input');
    input.addEventListener('change', e => {
        onChange(e.target.checked);
    });

    const button = container.querySelector('button');
    button.addEventListener('click', e => {
        onDelete(todo);
    })

    return container;
}

export default TodoItem;
