"use strict"

class mProducts {
    constructor (arrayOfProducts) {
        this.arrayOfProducts = arrayOfProducts;
        this.productOnFocus = null;
    }

    getArrayOfProducts() {
        return this.arrayOfProducts;
    }

    setProductOnFocus(productNumber) {
        this.productOnFocus = productNumber;
    }

    getProductOnFocusNumber() {
        return this.productOnFocus;
    }
};

let products = [];

export const mCreateProducts = (arrayOfGoods) => {
    products = new mProducts(arrayOfGoods);
};

export const mGetArrayOfProducts = () => {
    return products.getArrayOfProducts();
};

export const mGetProductOnFocusNumber = () => {
    return products.getProductOnFocusNumber();
};

