const input = require("readline-sync");
let str = "LaunchCode";

let numOfLetters = input.question("Input how many letters to move. ");
// Part 2 adding a if statment if suitable input
if (numOfLetters > str.length || numOfLetters < 1) {
    console.log(`You entered ${numOfLetters} letters to be moved but ${str} is only ${star.length} long. So we moved only 3 letters. `);
    numOfLetters = 3;
}

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let changeStr = str.slice(3) + str.slice(0,3);
//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The old word was ${str} and the new word is ${changeStr}.`);


//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
