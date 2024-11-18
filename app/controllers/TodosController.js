import { todosService } from "../services/TodosService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";


export class TodosController {
  constructor() {
    console.log('📃🎮');
    this.getTodos()
    AppState.on('todos', this.drawTodos)
  }

  async getTodos() {
    await todosService.getTodos()
  }

  drawTodos() {
    const todos = AppState.todos
    let todosContent = ''
    todos.forEach(todo => todosContent += todo.todoTemplate)
    setHTML('todos', todosContent)
  }
  // async createTodo() {
  //   try {
  //     event.preventDefault()
  //     const form = event.target
  //     const formData = getFormData(form)
  //     console.log('submitted', form, formData);
  //     todosService.createTodo(formData)
  //     await todosService.createTodo(formData)
  //   } catch (error) {
  //     console.error(error)
  //     Pop.toast("Couldn't save ToDo")
  //   }
  // }

  // async getMyTodos() {
  //   try {
  //     await todosService.getMyTodos()
  //   } catch (error) {
  //     console.error(error)
  //     Pop.toast("Couldn't get your ToDos")
  //   }
  // }

  // REVIEW how do You need to pull the form data
  // Gregslist, redacted  
  // async createTodo() {
  //   try {
  //     event.preventDefault()
  //     const form = event.target
  //     const formData = getFormData(form)
  //     console.log('submitted', form, formData);
  //     todosService.createTodo(formData)
  //   } catch (error) {

  //   }
  // try {
  //   event.preventDefault()
  //   const formElm = event.target
  //   console.log('🧪📃', formElm);
  //   const formData = getFormData(formElm)
  //   console.log('📃📃', formData);
  //   await todosService.createTodo(formData)
  //   Pop.toast("Successfully saved a ToDo", 'success')
  //   formElm.reset()
  // } catch (error) {
  //   Pop.toast("Did not successfully save a ToDo", 'error')
  //   console.error(error)
  // }
}
