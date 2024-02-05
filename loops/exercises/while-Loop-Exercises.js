const input = require("readline-sync");

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuel = ("");
let numberOfAstronauts = ("");
let altitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
startingFuel = input.question("What is the starting fuel? ");
startingFuel = Number(startingFuel);
while (startingFuel < 5000 || startingFuel > 30000 || isNaN(startingFuel)) {
    startingFuel = input.question("Invalid!! Please enter value between 5,000 and 30,000. ");
    startingFuel = Number(startingFuel);
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
numberOfAstronauts = input.question("How many astronauts? 1-7 ");
numberOfAstronauts = Number(numberOfAstronauts);

while (numberOfAstronauts < 1 || numberOfAstronauts > 7 || isNaN(numberOfAstronauts)) {
  numberOfAstronauts = Number(input.question("Please enter a number 1 - 7. "));
  //numberOfAstronauts = Number.numberOfAstronauts; 
  // !!!WTF Removing "numberOfAstronauts = inputs.question("Please enter a number 1 - 7. ") " worked. it was doing a infinite loop when after the "input statement". ??? WHY?? Having the "Number" method on a seperate line caused it to loop. why? MAYBE it lets (input...) do its thing then change it to number then put int numberOfAstronauts. But the other way should have worked too. WEIRD
  
}
console.log(numberOfAstronauts); 
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (startingFuel - 100 * numberOfAstronauts >= 0) {
  altitude = altitude + 50;
  startingFuel = startingFuel - (100 * numberOfAstronauts);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log("The Shuttle gaind an altitude of " + altitude + " km");

if (altitude >= 2000) {
  console.log("ORBIT ACHIEVED!!!!")
} else {
  console.log("Failed to reach orbit. : ( ");
}

