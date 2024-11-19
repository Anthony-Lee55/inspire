import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Todo } from "../models/Todos.js"

class TodosService {

  async createTodo(todoData) {
    const response = await api.post('api/todos', todoData)
    console.log('🧪📃', response.data);
    // const car = new Car(response.data)
    // AppState.cars.push(car)
  }

  // // async getTodo(){
  // //   const response = await api.
  // // }

  // async createTodo(todoData) {
  //   const response = await api.post('api/todos')
  //   const todo = new Todo(todoData)
  //   console.log('new', todo);

  // }

  // TODO, create todo. Needs to take in the form data, and pass it to the api
  // log that response
  // convert that response into your Backed Class
  // push that into appstate




}

export const todosService = new TodosService()