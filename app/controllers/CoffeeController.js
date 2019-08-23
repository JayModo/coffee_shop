import CoffeeService from "../services/CoffeeService.js";


let _coffeeService = new CoffeeService()


function _draw() {
  let template = ``
  let coffeeShop = _coffeeService.CoffeeShop
  coffeeShop.forEach((coffeeShop, index) => {
    template += coffeeShop.getTemplate(index)
  })
  document.querySelector("#coffeeShop").innerHTML = template
}


export default class CoffeeController {
  constructor() {
    console.log('the controls yo')
    _draw()
  }

  addCoffeeShop(event) {

    event.preventDefault()
    let form = event.target
    let newCoffee = {
      name: form.name.value,
      type: form.type.value,
      // flavors: form.flavors.value,
      // size: form.size.value,
      // price: form.price.value
    }
    _coffeeService.addCoffeeShop(newCoffee)
    _draw()
  }

  addFlavors(event, coffeeShopIndex) {
    event.preventDefault()
    let form = event.target
    let newFlavors = form.flavors.value
    _coffeeService.addFlavors(newFlavors, coffeeShopIndex)
    _draw()
  }


}