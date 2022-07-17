import { ProductList } from "./App/Components/ProductList/ProductList";

export class App {
  private productsList = new ProductList();
  render() {
    return `
    <h1>App ECommerce</h1>
    <div>
    ${this.productsList.render()}
    </div>`
  } 
}

