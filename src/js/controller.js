"use strict"

import {mCreateGoods} from "./model.js";
import {vCreateGoods} from "./view.js"; 

const cCreateGoods = () => {
    mCreateGoods();
    vCreateGoods();
};

let arrayOfGoods = [
    {
        name: "Coalesce: Functioning On Impatience T-Shirt",
        imgSrc: "./img/coalesce-functioning-on-impatience-t-shirt.png",
        alt: "coalesce-functioning-on-impatience-t-shirt",
        priceDollars: 15,
        priceCents: 0,
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
        priceDollars: 22,
        priceCents: 0,
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
        priceDollars: 55,
        priceCents: 0,
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
        priceDollars: 15,
        priceCents: 0,
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
        priceDollars: 13,
        priceCents: 50,
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
        priceDollars: 12,
        priceCents: 30,
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
        priceDollars: 169,
        priceCents: 99,
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
        priceDollars: 134,
        priceCents: 99,
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
        priceDollars: 15,
        priceCents: 99,
        ratingStarsNumber: 1,
        textDescription: `When you're dress-hunting, you want to find something that's fun, 
            comfortable, flattering, and uniquely you! So, why not start with a sundress? They 
            always brighten up the environment around you and inspire positivity wherever you go! 
            Looking for some color to brighten up your day? Check out the cotton sundresses.`
    },
];

cCreateGoods(arrayOfGoods);

