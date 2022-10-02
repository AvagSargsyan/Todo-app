import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import TodoFooter from "./TodoFooter";

function App() {

    let todos = [];

    const container = document.createElement('div');
    container.classList.add('app');

    function render() {
        container.innerHTML = '';
        container.appendChild(TodoInput(function (label) {
            todos.unshift({
                label: label,
                isCompleted: false
            });
            render();
        }));

        container.appendChild(TodoList(
            todos,
            () => {
                render();
            },
            todo => {
                todos = todos.filter(t => t.label !== todo.label);
                render();
            }));
        container.appendChild(TodoFooter(
            todos,
            () => {
                todos = todos.filter(todo => !todo.isCompleted);
                render();
            }));
    }

    render();

    return container;
}

export default App;
