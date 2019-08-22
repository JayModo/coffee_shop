import CoffeeShop from "../models/CoffeeShop.js";






let _state = {
  coffee: [new CoffeeShop({
    name: "Coffeezz",
    type: "triple dubz",
    flavors: ["vanilla", "caramel", "chocolate"],
    size: "double grande xxtra large",
    price: 30000
  })]
}

export default class CoffeeService {
  addFlavors(newFlavors, coffeeShopIndex) {
    _state.coffee[coffeeShopIndex].flavors.push(newFlavors)
  }
  constructor() {
    console.log("the services")
  }

  addCoffeeShop(newCoffeeShop) {
    _state.coffee.push(new CoffeeShop(newCoffeeShop))
  }

  get CoffeeShop() {
    return _state.coffee.map(coffeeShop => new CoffeeShop(coffeeShop))
  }

}