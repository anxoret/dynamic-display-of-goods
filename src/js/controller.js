"use strict"

import {mCreateProducts} from "./model.js";
import {vCreateProducts} from "./view.js"; 
import {mGetArrayOfProducts} from "./model.js";

export const cCreateProducts = (arrayOfProduct) => {
    if (Object.prototype.toString.call(arrayOfProduct) !== "[object Array]") {
        throw new Error("Array of product must have a data type Array.");
    }

    if ( !(arrayOfProduct.length) ) {
        throw new Error("Array of product can not be empty.");
    }

    mCreateProducts(arrayOfProduct);
    vCreateProducts(
        mGetArrayOfProducts()
    );
};

