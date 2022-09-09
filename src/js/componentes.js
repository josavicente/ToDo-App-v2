import '../css/componentes.css';
// import webpacklogo from '../assets/img/webpack-logo.png';

// Referencias en el html

const divTodoList = document.querySelector('.todo-list')

    export const crearTodoHTML = ( todo ) => {

        const htmlTodo = `
        <li class="${todo.completado ? 'completed' : '' }" data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox" ${todo.completado ? 'completed' : '' }>
                <label>${todo.tarea}</label>
                <button class="destroy"></button>
            </div>
            <input class="edit" value="Create a TodoMVC template">
        </li>
        `;

        const div = document.createElement('div');
        div.innerHTML = htmlTodo;
        divTodoList.append(div.firstElementChild);
        return div;
    }
