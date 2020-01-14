"use strict"

const vCreateProduct = (product) => {

}

export const vCreateProducts = (arrayOfProducts) => {
    for (let product in arrayOfProducts) {
        vCreateProduct(product);
    }
};