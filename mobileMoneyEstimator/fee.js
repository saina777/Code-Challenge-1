const basicTransactionFee =0.015;
const minimumFee = KES10 ;
const maximumFee =KES70 ;

function estimateTransactionFee(amountToSend){
    let transactionFee = basicTransactionFee * amountToSend ;
    if(transactionFee < minimumFee){
        transactionFee = minimumFee ;
    }
    else if(transactionFee < maximumFee){
        transactionFee = maximumFee ;
    }
    else{
        return transactionFee;
    }
    amountToDebit = amountToSend + transactionFee;

console.log("Sending KES", amountToSend)
console.log("Calculated Transaction Fee: KES",transactionFee )
console.log("Total amount to be debited: KES", amountToDebit)
console.log("Send Money Securely!")
}

amountToSend = prompt("Unatuma Ngapi? (KES):")
amountToSend = parseInt(amountToSend)

estimateTransactionFee(amountToSend);