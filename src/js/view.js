"use strict"

let productPropertyNames = [
    "name",
    "imgSrc", 
    "alt", 
    "priceDollars", 
    "priceCents", 
    "ratingStarsNumber", 
    "textDescription"
    ];

const vCheckProductData = (product) => {
    let errorText = "";
    
    productPropertyNames.forEach(propertyName => {
        if (propertyName in ) return;
    });

};

const vCreateProduct = (product) => {
    if (vCheckProductData(product)) {
        
    }
};

export const vCreateProducts = (arrayOfProducts) => {
    for (let product in arrayOfProducts) {
        vCreateProduct(product);
    }
};