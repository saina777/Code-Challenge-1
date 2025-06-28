function estimateTransactionFee() {
    // prompt the user to enter amount
    const userinput = prompt("Unatuma ngapi? (KES)");
    // convert the input to a number
    amountToSend=parseInt(userinput);

    // check if the input is a valid number
    if (isNaN(amountToSend) || amountToSend <= 0) {
        alert("Please enter a valid number!");
        return;
    }
    // creating values for the variables
    const minFee = 10; // minimum transaction fee in Ksh
    const maxFee = 70// maximum transaction fee in Ksh
    const feePercentage = 0.015; // transaction fee percentage
    // calculate the transaction fee
    var actualtransactionFee = amountToSend * feePercentage;
    // ensure the transaction fee is within the minimum and maximum limits
    if (actualtransactionFee <=10) {
        actualtransactionFee = 10; // minimum fee
    } else if (actualtransactionFee >= 70) {
        actualtransactionFee = 70; // maximum fee
    }else {
        actualtransactionFee = actualtransactionFee; // actual fee
    }
    // creates a multiline string to display the results
    var message=

    `Sending KES ${amountToSend}
     Calculated Transaction Fee KES ${actualtransactionFee}
     Total Amount to be debited KES ${amountToSend + actualtransactionFee}  
    

    Send Money Securely!`
    

    // to print the output to console
    console.log(message);
    // to display an alert pop up for the output message
    alert(message);
}
// call the function to execute it
estimateTransactionFee();