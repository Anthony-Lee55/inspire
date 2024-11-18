import { AuthController } from './controllers/AuthController.js';
import { ImagesController } from './controllers/ImagesController.js';
import { QuotesController } from './controllers/QuotesController.js';
import { TodosController } from './controllers/TodosController.js';
import { WeatherController } from './controllers/WeatherController.js';
import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()

  ImagesController = new ImagesController()

  TodosController = new TodosController()

  QuotesController = new QuotesController()

  WeatherController = new WeatherController()

  constructor() {
    if (USE_ROUTER) {
      this.router = router
      this.router.init(this)
    }
  }
}


const app = new App()
// @ts-ignore
window.app = app
