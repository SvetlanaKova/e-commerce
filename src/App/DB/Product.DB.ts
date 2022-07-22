import { Product } from "../Interfaces/Product";

const PRODUCTS: Product[] = [
    {
        id: 'Phone 1',
        name: 'Смартфон Apple iPhone 10 64 ГБ черный',
        price: 45999,
        image: 'https://zeon18.ru/files/thumb/item/1_11464.jpg?s=190,160',
        favorite: true
    },
    {
        id: 'Phone 2',
        name: 'Смартфон Apple iPhone 12 128 ГБ фиолетовый',
        price: 65900,
        image: 'https://zeon18.ru/files/thumb/item/1_2322.png?s=190,160',
        favorite: true
    },
    {
        id: 'Phone 3',
        name: 'Смартфон Apple iPhone 11 64 ГБ черный',
        price: 45990,
        image: 'https://zeon18.ru/files/thumb/item/1_11464.jpg?s=190,160',
        favorite: true
    },
    {
        id: 'Phone 4',
        name: 'Смартфон Apple iPhone 20 64 ГБ черный',
        price: 95990,
        image: 'https://zeon18.ru/files/thumb/item/1_11464.jpg?s=190,160',
        favorite: true
    },
    {
        id: 'Phone 5',
        name: 'Смартфон Apple iPhone 19 64 ГБ черный',
        price: 70990,
        image: 'https://zeon18.ru/files/thumb/item/1_11464.jpg?s=190,160',
        favorite: true
    },
    {
        id: 'Phone 6',
        name: 'Смартфон Apple iPhone 18 64 ГБ черный',
        price: 50990,
        image: 'https://zeon18.ru/files/thumb/item/1_11464.jpg?s=190,160',
        favorite: true
    },
];

export const getProducts = (): Promise<Product[]> => {
    return new Promise<Product[]>((resolve,reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject(new Error('Something goes wrong'));
            } else {
                resolve(PRODUCTS); 
            }
        }, 2000);
    });
};