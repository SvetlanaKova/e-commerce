import { ProductItem } from "../ProductItem"

export class ProductList {
    private products: ProductItem[] = [new ProductItem(),new ProductItem(),new ProductItem(),new ProductItem()]
    render() {
        return `<h2>Product List</h2>
        ${this.products.map((product) => product.render()).join('')}
        ...
        <br>
        <button>prev</button>
        <button>next</button>`
    }
}