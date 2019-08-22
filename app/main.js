import CoffeeController from "./controllers/CoffeeController.js";




export default class App {
  constructor() {
    this.controllers = {
      coffeeController: new CoffeeController()
    }
  }
}



window['app'] = new App()