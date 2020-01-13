"use strict"

class mGoods {
    constructor (arrayOfGoods) {
        this.arrayOfItems = arrayOfGoods;
        this.itemOnFocus = null;
    }

    getArrayOfItems() {
        return this.arrayOfItems;
    }

    setItemOnFocus(itemNumber) {
        this.itemOnFocus = itemNumber;
    }

    getItemOnFocusNumber() {
        return this.itemOnFocus;
    }
};

let goods = [];

export const mCreateGoods = (arrayOfGoods) => {
    if (Object.prototype.toString.call(arrayOfGoods) !== "[object Array]") {
        throw new Error("Array of goods must have a data type Array.");
    }

    if ( !(arrayOfGoods.length) ) {
        throw new Error("Array of goods can not be empty.");
    }

    goods = new mGoods(arrayOfGoods);
};

export const mGetArrayOfGoodsItems = () => {
    return goods.getArrayOfItems();
};

export const mGetGoodsItemOnFocusNumber = () => {
    return goods.getItemOnFocusNumber();
};

