export class Todo {
  constructor(data) {
    this.id = data.id
    this.completed = data.completed
    this.creatorId = data.creatorId
    this.description = data.description
  }

  get todoTemplate() {
    return `
    <input id="save-todo-text type="text" class="rounded-1 btn btn-outline-black bg-glass" placeholder="Add a ToDo">
        <button id="save-todo" type="submit" onsubmit="app.TodosController.createTodo('')" class="btn btn-outline-white rounded-1"><i class="text-light mdi mdi-plus-thick"></i></button>
    `
  }
}