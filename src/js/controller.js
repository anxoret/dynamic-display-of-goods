"use strict"

import {mCreateGoods} from "./model.js";
import {vCreateGoods} from "./view.js"; 

export const cCreateGoods = () => {
    mCreateGoods();
    vCreateGoods();
};

