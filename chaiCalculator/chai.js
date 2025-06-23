const water_measure = 200;
const milk_amount = 50;
const tea_leaves_amount = 1;
const sugar_amount = 2;           

function chaiCalc(numberOfCups) {
    const total_water = water_measure * numberOfCups;
    const total_milk = milk_amount * numberOfCups;
    const total_tea_leaves = tea_leaves_amount * numberOfCups;
    const total_sugar = sugar_amount * numberOfCups;

console.log("For", numberOfCups);
console.log("Water:", total_water, "ml:");
console.log("Milk:", total_milk, "ml");
console.log("Tea Leaves", total_tea_leaves, "teaspoons ");
console.log("Sugar", total_sugar, "teaspoon");
}

const cups  = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = parseInt(cups );

if (!isNaN(numberOfCups) && numberOfCups > 0) {
    chaiCalc(numberOfCups);
} else {
    console.log("Number should be greater than zero");
}

chaiCalc(numberOfCups);