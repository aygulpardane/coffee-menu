const coffeeData = require("./coffee_data.js");

// 2. Print an array of all the drinks on the menu.

const drinks = coffeeData.map(item => item.name);
console.log(drinks);

// 3. Print an array of drinks that cost 5 and under.

const drinksUnderFive = coffeeData.filter(item => item.price <= 5);
console.log(drinksUnderFive);

// 4. Print an array of drinks that are priced at an even number.

const evenPricedCoffee = coffeeData.filter(item => item.price % 2 === 0);
console.log(evenPricedCoffee);

// 5. Print the total if you were to order one of every drink.

const sumOfAllDrinks = coffeeData.map(item => item.price).reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(sumOfAllDrinks);

// 6. Print an array with all the drinks that are seasonal.

const seasonalDrinks = coffeeData.filter(item => item.seasonal === true);
console.log(seasonalDrinks);

// 7. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans".

const seasonalDrinksName = coffeeData.filter(item => item.seasonal === true).map(item => item.name).forEach(item => console.log(item + " with imported beans"));
console.log(seasonalDrinksName);

