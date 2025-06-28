function calculateBodaFare() {
    // prompt the user to enter amount
    const userinput = prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
    // convert the input to a number
    distanceInKm=parseInt(userinput);

    // check if the input is a valid number
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        alert("Please enter a valid number!");
        return;
    }
    // creating values for the variables
    const baseFare = 50; // base fare in Ksh
    const farePerKm = 15; // fare per kilometer in Ksh
    // calculate the total fare
    const totalFare = baseFare + (farePerKm * distanceInKm);
    // creates a multiline string to display the results
    var message=

    `Uko kwote? Io ni ${distanceInKm} km
    Ukikalia Pikipiki KES ${baseFare}  
    Mpaka Uko KES ${totalFare}.
    Total KES ${totalFare}.

    Panda Pikipiki!`
    

    // to print the output to console
    console.log(message);
    // to display an alert pop up for the output message
    alert(message);
}
// call the function to execute it
calculateBodaFare();