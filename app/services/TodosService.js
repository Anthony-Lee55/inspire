import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Todo } from "../models/Todos.js"

class TodosService {

  async getTodos() {
    const response = await todoApi.get('api/todos')
    console.log('');

  }

  // async createTodo() {
  //   const todoToSave = AppState.todo
  //   const response = await api.post('api/todos')
  //   console.log('💾📃📡', response.data);

  // }

  // async createTodo(formData) {
  //   const todo = new Todo(formData)
  //   console.log('new', todo);
  //   AppState.todos.push(todo)
  // const response = await api.post('api/todos', formData)
  // console.log('🧪📃📡', response.data);
  // const createdTodo = new Todo(response.data)
  // AppState.todos.push(createdTodo)
}

// async getMyTodos() {
//   const response = await api.get('api/todos')
//   console.log('🫳📃📡', response.data);

// }




export const todosService = new TodosService()