"use strict"

import {mCreateProducts} from "./model.js";
import {vCreateProducts} from "./view.js"; 
import {mGetArrayOfProducts} from "./model.js";

let productPropertyNames = [
    "name",
    "imgSrc", 
    "alt", 
    "priceDollars", 
    "priceCents", 
    "ratingStarsNumber", 
    "textDescription"
    ];

const cCheckProductItem = (arrayOfProduct) => {
    if (Object.prototype.toString.call(arrayOfProduct) !== "[object Array]") {
        throw new Error("Array of product must have a data type Array.");
    }

    if ( !(arrayOfProduct.length) ) {
        throw new Error("Array of product can not be empty.");
    }


}

export const cCreateProducts = (arrayOfProduct) => {
    mCreateProducts(arrayOfProduct);
    vCreateProducts(
        mGetArrayOfProducts()
    );
};

