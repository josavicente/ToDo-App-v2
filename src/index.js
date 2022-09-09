import {Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';
// import { Todo } from './classes/todo.class';
// import { TodoList } from './classes/todo-list.class';

import './styles.css';

const todoList = new TodoList();

const tarea = new Todo('Aprender JS');
todoList.nuevoTodo(tarea);

crearTodoHTML(tarea);
console.log(todoList);