import {Todo, TodoList} from './classes';
import { crearTodoHTML } from './js/componentes';

import './styles.css';

export const todoList = new TodoList();

// todoList.todos.forEach ( todo =>  {
//       crearTodoHTML(todo);
// })

// Equivalente:
todoList.todos.forEach ( crearTodoHTML );