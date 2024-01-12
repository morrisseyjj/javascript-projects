// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05.34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount > 7) {
    console.log("Team many people");
}
// add logic below to verify all astronauts are ready
if (astronautStatus = "ready"){
    console.log("The atronauts are ready!");
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg < maximumMassLimit ) {
    console.log ("The total mass is less then the Max Mass Limit! yeah");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > -300 && fuelTempCelsius < -150){
    console.log("Fuel is good temp")
} else {
    console.log("Fuel temp not good");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = "100%"); {
    console.log ("Fuel is 100%");
}
// add logic below to verify the weather status is clear
if (weatherStatus = "clear") {
    console.log("Weather is good for takeoff!");
}
// Verify shuttle launch can proceed based on above conditions
console.log("-----------------------------------------------");
console.log("DATE: "+ date);
console.log("TIME: " + time );
console.log("Astronaut Count " + astronautCount );
console.log("Crew Mass:" + crewMassKg + "kg" );
console.log("Fuel Mass: " + fuelMassKg + "kg" );
console.log("Shuttle Mass: " + shuttleMassKg + "kg" );
console.log("Total Mass: " + totalMassKg+"kg" );
console.log("Fuel Temp: " + fuelTempCelsius +" C");
console.log("Weather: " + weatherStatus );

console.log("Have a safe Flight!!");