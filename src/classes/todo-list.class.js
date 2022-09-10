import { Todo } from "./todo.class";

export class TodoList {
      constructor(){
            //this.todos = [];
            this.cargarLocalStorage();
            console.log(this.todos); 
      }

      nuevoTodo(todo){
            this.todos.push(todo);
            this.guardarLocalStorage();
      }
      eliminarTodo(id){
            this.todos = this.todos.filter( todo => todo.id != id );
            this.guardarLocalStorage();
      }
      marcarCompletado(id){

            for (const todo of this.todos) {

                  if(todo.id == id) {
                        todo.completado = !todo.completado;
                        this.guardarLocalStorage();
                        break;
                  }
            }
            this.todos = []
      }
      eliminarCompletado(){
            this.todos = this.todos.filter( todo => todo.completado != true );
            this.guardarLocalStorage();
      }

      guardarLocalStorage(){
            localStorage.setItem('todo',JSON.stringify(this.todos));
      }

      cargarLocalStorage(){
            this.todos =  (localStorage.getItem('todo')) 
                  ? JSON.parse(localStorage.getItem('todo')) 
                  : [];
            console.log (this.todos);

            this.todos = this.todos.map( Todo.fromJson );
            console.log (this.todos);
      }

}