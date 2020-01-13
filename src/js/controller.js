"use strict"

import {mCreateGoods} from "./model.js";
import {vCreateGoods} from "./view.js"; 
import {mGetArrayOfGoodsItems} from "./model.js";

export const cCreateGoods = (arrayOfGoods) => {
    mCreateGoods(arrayOfGoods);
    vCreateGoods(
        mGetArrayOfGoodsItems()
    );
};

