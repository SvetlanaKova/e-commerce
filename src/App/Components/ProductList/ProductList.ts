import { productsModel } from "../../Models/ProductsModel";
import { Product } from "../../Interfaces/Product";
import { ProductItem } from "../ProductItem";
import { appStore } from "../../Store/AppStore";

export class ProductList {
  private loading = false;
  private error: Error | null = null;
  private products: Product[] = [];

  constructor() {
    this.fetchProducts();
  }

  fetchProducts() {
    this.loading = true;
    productsModel
      .getProducts()
      .then((products) => {
        this.products = products;
      })
      .catch((error) => {
        this.error = error;
      })
      .finally(()=>{
        this.loading = false;
        appStore.$render.next(true);
      });
  }

  render() {
    return `
        <h2>Product List</h2>
        ${this.products
            .map((product) => new ProductItem(product))
            .map((product) => product.render())
            .join('')}
        ${this.loading ? "<p>Loading....</p>" : ""}
        <p>....</p>
        <div>
        <button>prev</button>
        <button>next</button>
        </div>`;
  }
}
