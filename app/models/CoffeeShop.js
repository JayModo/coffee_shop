



export default class CoffeeShop {
  constructor(data) {
    this.name = data.name
    this.type = data.type
    this.flavors = data.flavors
    this.size = data.size
    this.price = data.price

  }

  getTemplate(index) {
    let template =
      `
    <div class="col-4">
    <h1>${this.name}</h1>
    <h3>${this.type}</h3>
    <h3>${this.size}</h3>
    <h3>${this.price}</h3>
    `
    template += this.drawFlavors(index)
    template += `
    </form>
    <form onsubmit="app.controllers.CoffeeController.addflavor(event, ${index})">
      <div class="form-group">
        <label for="flavors">flavors</label>
        <input type="text" class="form-control" name="flavors" placeholder="coffee flavors" required>
      </div>
      <button type="submit">+</button>
    </form>
    `
    return template
  }
  drawFlavors(coffeeShopIndex) {
    let FlavorsTremplate = ""
    this.flavors.forEach((flav, flavorIndex) => {
      flavorIndex += `<li>${flav}<span onsubmit="app.controllers.pizzaController.deleteTopping(${coffeeShopIndex}, ${flavorIndex})">X</span></li>`
    });
    return FlavorsTremplate
  }

}