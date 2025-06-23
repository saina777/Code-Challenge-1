const baseFare = 50;
const chargePerKm = 15;

function calculateBodaFare(distanceInKm){
    let totalFare = baseFare + (distanceInKm * chargePerKm);
    let mpakaUko = distanceInKm * chargePerKm
    console.log(totalFare);
}

distanceInKm = prompt("Unafika wapi Mkubwa? Kilometer ngapi?")
distanceInKm = parseInt(distanceInKm);

console.log ("Uko kwote? Io ni", distanceInKm, "km");
console.log("Ukikalia Pikipiki:KES", baseFare);
console.log("Mpaka Uko: KES", mpakaUko);
console.log("Total: KES",totalFare);
console.log("Panda Pikipiki!")

calculateBodaFare(distanceInKm);