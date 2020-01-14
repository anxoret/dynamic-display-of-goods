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

export const mCreateGoods = (arrayOfGoods) => {
    products = new mGoods(arrayOfGoods);
};

export const mGetArrayOffProducts = () => {
    return products.getArrayOfProducts();
};

export const mGetProductOnFocusNumber = () => {
    return products.getProductOnFocusNumber();
};

