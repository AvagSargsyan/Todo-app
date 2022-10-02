function TodoInput(add) {
    const container = document.createElement('div');
    container.classList.add('todo-input');

    container.innerHTML = `
        <form>
            <input type="text" placeholder="Add a new task" />
            <button>Add</button>
        </form>
    `

    container.addEventListener('submit', e => {
        e.preventDefault();
        if (e.target[0].value) {
            add(container.querySelector('input').value);
        }
    })

    return container;
}

export default TodoInput;
