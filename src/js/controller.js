"use strict"

import {mCreateProducts} from "./model.js";
import {vCreateProducts} from "./view.js"; 
import {mGetArrayOfProducts} from "./model.js";
import {vShowProductAdditionalInfo} from "./view.js";
import {vHideProductAdditionalInfo} from "./view.js";

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

export const cShowProductAdditionalInfo = (vProduct) => {
    vShowProductAdditionalInfo(vProduct);
};

export const cHideProductAdditionalInfo = (vProduct) => {
    vHideProductAdditionalInfo(vProduct);
};

