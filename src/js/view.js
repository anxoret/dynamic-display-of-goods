"use strict"

let productPropertyNames = [
    "name",
    "imgSrc", 
    "imgAlt", 
    "dollarPrice", 
    "centPrice", 
    "ratingStarsAmount", 
    "textDescription"
    ];

// let aa = 
//     [ 1
//     , 2
//     , 3
//     , 
//     ];

const vCheckProductData = (product) => {
    let errorText = "";
    
    productPropertyNames.forEach(propertyName => {
        if (propertyName in product) return;

        if (errorText == "") {
            errorText = `A product has no necessary property/properties: ${propertyName}`;
            return;
        } 

        errorText += ` ${propertyName}`;
    });

    if (errorText !== "") {
        throw new Error(errorText);
    }
};

const vGetRatingStars = (starSrc, starAlt, starsAmount) => {
    let starsHtmlStr = "";
    
    for (let starNumber = 0; starNumber < starsAmount; starNumber++) {
        starsHtmlStr += `
            <img class="product__star-img product__star-img_theme_original" src=${starSrc} alt=${starAlt}>
        `;
    }

    return starsHtmlStr;
};

const vGetProductRatingContent = (product) => {
    let productRatingContent = `
        <div class="product__line product__line_theme_original"></div>
        <div class="product__black-stars-container product__black-stars-container_theme_original">
            ${vGetRatingStars("./img/black-star.png", "black-star", product.ratingStarsAmount)}
        </div>
        <div class="product__orange-stars-container product__orange-stars-container_theme_original product__orange-stars-container_close">
            ${vGetRatingStars("./img/orange-star.png", "orange-star", product.ratingStarsAmount)}
        </div>
    `;

    return productRatingContent;
};

let vProducts = document.querySelector(".products");

const vCreateProduct = (product) => {
    vCheckProductData(product);

    let vProduct = document.createElement("div");
    vProduct.className = "product product_theme_original";
    vProducts.append(vProduct);

    let productImgContainer = document.createElement("div");
    productImgContainer.className = "product__img-container product__img-container_theme_original";
    vProduct.append(productImgContainer);

    let productImg = document.createElement("img");
    productImg.className = "product__img product__img_theme_original";
    productImg.setAttribute("src", product.imgSrc);
    productImg.setAttribute("alt", product.imgAlt);
    productImgContainer.append(productImg);

    let productName = document.createElement("p");
    productName.className = "product__name product__name_theme_original";
    productName.textContent = product.name;
    vProduct.append(productName);

    let productPurchaseInformation = document.createElement("div");
    productPurchaseInformation.className = "product__purchase-information product__purchase-information_theme_original";
    vProduct.append(productPurchaseInformation);

    let productPrice = document.createElement("div");
    productPrice.className = "product__price product__price_theme_original";
    productPrice.textContent = "$";
    productPurchaseInformation.append(productPrice);

    let productDollarsSpan = document.createElement("span");
    productDollarsSpan.className = "product__dollars-span product__dollars-span_theme_original";
    productDollarsSpan.textContent = product.dollarPrice + ".";
    productPrice.append(productDollarsSpan);

    let productCentsSpan = document.createElement("span");
    productCentsSpan.className = "product__cents-span product__cents-span_theme_original";
    if (product.centPrice < 9) {
        productCentsSpan.textContent = "0" + product.centPrice;
    } else {
        productCentsSpan.textContent = product.centPrice;
    }
    productPrice.append(productCentsSpan);

    let productButton = document.createElement("button");
    productButton.className = "product__button product__button_theme_original";
    productButton.innerHTML = `<span class="product__button-span product__button-span_original">Add to Cart</span>`;
    productPurchaseInformation.append(productButton);

    let productWrapper = document.createElement("div");
    productWrapper.className = "product__wrapper product__wrapper_theme_original";
    vProduct.append(productWrapper);

    let productRating = document.createElement("div");
    productRating.className = "product__rating product__rating_theme_original";
    productRating.innerHTML = vGetProductRatingContent(product);
    productWrapper.append(productRating);

    let productAdditionalInfo = document.createElement("div");
    productAdditionalInfo.className = "product__additional-info product__additional-info_theme_original product__additional-info_close";
    productAdditionalInfo.innerHTML = `<p class="product__text-description product__text-description_theme_original">${product.textDescription}</p>`;
    productWrapper.append(productAdditionalInfo);
};

export const vCreateProducts = (arrayOfProducts) => {
    arrayOfProducts.forEach(product => {
        vCreateProduct(product);
    });   
};

export const vShowProductAdditionalInfo = (vProduct) => {
    vProduct.classList.add("product_mouseenter");
    let productAdditionalInfo = vProduct.querySelector(".product__additional-info");
    productAdditionalInfo.classList.remove("product__additional-info_close");
};

export const vHideProductAdditionalInfo = (vProduct) => {
    vProduct.classList.remove("product_mouseenter");
    let productAdditionalInfo = vProduct.querySelector(".product__additional-info");
    productAdditionalInfo.classList.add("product__additional-info_close");
};

