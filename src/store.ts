import { writable, readable } from "svelte/store";

export const page = writable('home');

export function setPage(newPage) {
    page.set(newPage);
}

export const order = writable({})

export function updateOrder(newItem) {
    order.update(oldOne => {
        const updated = { ...oldOne, ...newItem}
        return updated 
    })
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
        menu: [
            {
                name: "Margharita Pizza",
                price: 22.99,
                description: "a 12-inch beauty with crust-to-crust cheese coverage. Basil optional",
                allergens: ['milk', 'soy', 'cheese']
            },
            {
                name: "Mushroom Pizza",
                price: 23.99,
                description: "The best mushrooms for the best pizza",
                allergens: ['milk', 'soy', 'cheese', 'mushrooms']
            },
            {
                name: "Meat-lover's Pizza",
                price: 22.99,
                description: "a 12-inch ",
                allergens: ['milk', 'soy', 'cheese']
            }
        ]
    },
    {
        name: "Tiny Tim's",
        link: "tim",
        menu: [
            {
                name: "3 Piece Pretzel Combo",
                price: 8.99,
                description: "Three 1-inch plain pretzels, with sea salt and no preservatives",
                allergens: ['wheat', 'gluten']
            },
            {
                name: "Giant Cheesy Pretzel",
                price: 12.99,
                description: "A giant 12-inch pretzel with 5-types of melted cheese",
                allergens: ['wheat', 'gluten','cheese']
            },
        ]
    },
])