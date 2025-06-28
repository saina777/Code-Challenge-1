function calculateChaiIngredients() {
    // prompt the user to enter aamount
    const userinput = prompt("How many cups of chai do you want to make?");
    // convert the input to a number
    numberOfCups=parseInt(userinput);

    // check if the input is a valid number
    if (isNaN(numberOfCups) || numberOfCups <= 0) {
        alert("Please enter a valid number!");
        return;
    }
    // creating values for the variables
    const waterPerCup = 200; // in cups
    const milkPerCup = 50; // in cups
    const teaLeavesPerCup = 1; // in grams
    const sugarPerCup = 2; // in grams
    // calculate the total ingredients needed
    const totalWater = waterPerCup * numberOfCups;
    const totalMilk = milkPerCup * numberOfCups;
    const totalLeavesTea = teaLeavesPerCup * numberOfCups;
    const totalSugar = sugarPerCup * numberOfCups;
    // creates a multiline string to display the results
    var message=

    `To make ${numberOfCups} cups of chai, you will need:
    water: ${totalWater} ml
    milk: ${totalMilk} ml
    tea leaves(Majani): ${totalLeavesTea} tablespoon${totalLeavesTea > 1 ? 's' : ''}
    sugar: ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''}
    Enjoy your Chai Bora!`; 

    // to print the output to console
    console.log(message);
    // to display an alert pop up for the output message
    alert(message);
}
// call the function to execute it
calculateChaiIngredients();