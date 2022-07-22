import { getProducts } from "../DB/Product.DB";
import { Product } from "../Interfaces/Product";


export class ProductsModel {
    static isExist = false;
    static instance: ProductsModel;

    constructor() {
        if (ProductsModel.isExist) {
            return ProductsModel.instance;
        }

        ProductsModel.isExist = true;
        ProductsModel.instance = this;
    }

    getProducts(): Promise<Product[]> {
        return getProducts();
    }
}

export const productsModel = new ProductsModel();