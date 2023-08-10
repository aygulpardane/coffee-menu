const coffeeData = require("./coffee_data.js");

// 2. Print an array of all the drinks on the menu.

const drinks = coffeeData.map(item => item.name);
console.log(drinks);

// 3. Print an array of drinks that cost 5 and under.

// const drinksUnderFive = coffeeData.filter(item => item.price <= 5);
// console.log(drinksUnderFive);

const drinksUnderFive = (coffeeData) = {
    coffeeData.price <= 5;
    return coffeeData.name;
};

// 4. Print an array of drinks that are priced at an even number.

// 5. Print the total if you were to order one of every drink.

// 6. Print an array with all the drinks that are seasonal.

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".
