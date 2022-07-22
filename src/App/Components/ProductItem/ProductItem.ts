import { Product } from "../../Interfaces/Product"

export class ProductItem {
    constructor(private product: Product) {
        
    }
    render() {
        return `
        <div>
        <h3>${this.product.name}</h3>
        <p><img src='${this.product.image}></p>'
        `
    }
}