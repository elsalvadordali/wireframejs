import { writable, readable } from "svelte/store";

export const page = writable('home');

export function setPage(newPage) {
    console.log('were in')
    page.set(newPage);
}

export const menu = readable([
    {
        name: "Greasy Pete's",
        link: "pete",
        menu: [
            {
                name: "Double Cheese Burger",
                price: 23.99,
                description: "A delectable beef patty deep fried in lard, topped with micro greens, a thick slice of cheese, and a single cherry tomato, served in a sliced donut",
                allergens: ['beef', 'tomato', 'wheat', 'soy']
            }, {
                name: "Frosted french fries",
                price: 11.99,
                description: "Our classic fries, topped in a delightful mint chocolate ice cream sauce.",
                allergens: ['tomato', 'wheat', 'soy', 'egg']
            }, {
                name: "Milktastic milk shake",
                price: 13.99,
                description: "A mega-sized monster combination of a pint of ice cream of your choice and whole fat milk. Your choice of vanilla, chocolate or strawberry ice cream.",
                allergens: ['milk', 'soy']
            }
        ]
    },
    {
        name: "Crusty Kate's",
        link: "kate",
    },
    {
        name: "Tiny Tim's",
        link: "tim",
    },
])