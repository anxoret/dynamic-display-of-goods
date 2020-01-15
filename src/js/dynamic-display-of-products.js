"use strict"

import {cCreateProducts} from "./controller"; 

let arrayOfProducts = [
    {
        name: "Coalesce: Functioning On Impatience T-Shirt",
        imgSrc: "./img/coalesce-functioning-on-impatience-t-shirt.png",
        alt: "coalesce-functioning-on-impatience-t-shirt",
        dollarPrice: 15,
        centPrice: 0,
        ratingStarsNumber: 3,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Ink Eater: Krylon Bombear Destroyed Tee",
        imgSrc: "./img/ink-eater-krylon-bombear-destroyed-tee.png",
        alt: "ink-eater-krylon-bombear-destroyed-tee",
        dollarPrice: 22,
        centPrice: 0,
        ratingStarsNumber: 5,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "The Only Children: Paisley T-Shirt",
        imgSrc: "./img/the-only-children-paisley-t-shirt.png",
        alt: "the-only-children-paisley-t-shirt",
        dollarPrice: 55,
        centPrice: 0,
        ratingStarsNumber: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Coalesce: Functioning On Impatience T-Shirt",
        imgSrc: "./img/coalesce-functioning-on-impatience-t-shirt",
        alt: "coalesce-functioning-on-impatience-t-shirt",
        dollarPrice: 15,
        centPrice: 0,
        ratingStarsNumber: 3,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Zolof The Rock And Roll Destroyer: LOL Cat T-shirt",
        imgSrc: "./img/zolof-the-rock-and-roll-destroyer-lol-cat-t-shirt",
        alt: "zolof-the-rock-and-roll-destroyer-lol-cat-t-shirt",
        dollarPrice: 13,
        centPrice: 50,
        ratingStarsNumber: 5,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "The Get Up Kids: Band Camp Pullover Hoodie",
        imgSrc: "./img/the-get-up-kids-band-camp-pullover-hoodie",
        alt: "the-get-up-kids-band-camp-pullover-hoodie",
        dollarPrice: 12,
        centPrice: 30,
        ratingStarsNumber: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "Kenneth Cole New York Men's Con-verge Slip-on",
        imgSrc: "./img/kenneth-cole-new-york-men-s-con-verge-slip-on",
        alt: "kenneth-cole-new-york-men-s-con-verge-slip-on",
        dollarPrice: 169,
        centPrice: 99,
        ratingStarsNumber: 3,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "ASICS® Men's GEL-Kayano® XII",
        imgSrc: "./img/asics-men-s-gel-kayano-xii",
        alt: "asics-men-s-gel-kayano-xii",
        dollarPrice: 134,
        centPrice: 99,
        ratingStarsNumber: 5,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
    {
        name: "CN Clogs Beach/Garden Clog",
        imgSrc: "./img/cn-clogs-beach-garden-clog",
        alt: "cn-clogs-beach-garden-clog",
        dollarPrice: 15,
        centPrice: 99,
        ratingStarsNumber: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
];

let dynamicGoods = cCreateProducts(arrayOfProducts);

