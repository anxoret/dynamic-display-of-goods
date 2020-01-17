"use strict"

import {cCreateProducts} from "./controller"; 
import {cShowProductAdditionalInfo} from "./controller";
import {cHideProductAdditionalInfo} from "./controller";

let arrayOfProducts = [
    {
        name: "Coalesce: Functioning On Impatience T-Shirt",
        imgSrc: "./img/coalesce-functioning-on-impatience-t-shirt.png",
        imgAlt: "coalesce-functioning-on-impatience-t-shirt",
        dollarPrice: 15,
        centPrice: 0,
        ratingStarsAmount: 3,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Ink Eater: Krylon Bombear Destroyed Tee",
        imgSrc: "./img/ink-eater-krylon-bombear-destroyed-tee.png",
        imgAlt: "ink-eater-krylon-bombear-destroyed-tee",
        dollarPrice: 22,
        centPrice: 0,
        ratingStarsAmount: 5,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "The Only Children: Paisley T-Shirt",
        imgSrc: "./img/the-only-children-paisley-t-shirt.png",
        imgAlt: "the-only-children-paisley-t-shirt",
        dollarPrice: 55,
        centPrice: 0,
        ratingStarsAmount: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Coalesce: Functioning On Impatience T-Shirt",
        imgSrc: "./img/coalesce-functioning-on-impatience-t-shirt.png",
        imgAlt: "coalesce-functioning-on-impatience-t-shirt",
        dollarPrice: 15,
        centPrice: 0,
        ratingStarsAmount: 3,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Zolof The Rock And Roll Destroyer: LOL Cat T-shirt",
        imgSrc: "./img/zolof-the-rock-and-roll-destroyer-lol-cat-t-shirt.png",
        imgAlt: "zolof-the-rock-and-roll-destroyer-lol-cat-t-shirt",
        dollarPrice: 13,
        centPrice: 50,
        ratingStarsAmount: 5,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "The Get Up Kids: Band Camp Pullover Hoodie",
        imgSrc: "./img/the-get-up-kids-band-camp-pullover-hoodie.png",
        imgAlt: "the-get-up-kids-band-camp-pullover-hoodie",
        dollarPrice: 12,
        centPrice: 30,
        ratingStarsAmount: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Kenneth Cole New York Men's Con-verge Slip-on",
        imgSrc: "./img/kenneth-cole-new-york-men-s-con-verge-slip-on.png",
        imgAlt: "kenneth-cole-new-york-men-s-con-verge-slip-on",
        dollarPrice: 169,
        centPrice: 99,
        ratingStarsAmount: 3,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "ASICS® Men's GEL-Kayano® XII",
        imgSrc: "./img/asics-men-s-gel-kayano-xii.png",
        imgAlt: "asics-men-s-gel-kayano-xii",
        dollarPrice: 134,
        centPrice: 99,
        ratingStarsAmount: 5,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "CN Clogs Beach/Garden Clog",
        imgSrc: "./img/cn-clogs-beach-garden-clog.png",
        imgAlt: "cn-clogs-beach-garden-clog",
        dollarPrice: 15,
        centPrice: 99,
        ratingStarsAmount: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
];

cCreateProducts(arrayOfProducts);

let products = document.querySelectorAll(".product");

products.forEach(product => {
    product.addEventListener("mouseenter", (event) => {
        cShowProductAdditionalInfo(event.target);
    });

    product.addEventListener("mouseleave", (event) => {
        cHideProductAdditionalInfo(event.target);
    });
});




