//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
initials = language.slice(0,1)+language.slice(4,5);
console.log(initials);
//2. Without using slice(), use method chaining to accomplish the same thing.
let initialsTwo = language.charAt(0)+language.charAt(4);
console.log(initialsTwo);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
let chainingSentence =`The abbreviation for ${language} is ${language[0]+language[4]}.`;
console.log(chainingSentence);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
let newTitleCase = (notTitleCase.slice(0,1).toUpperCase())+(notTitleCase.slice(1,5))+(notTitleCase.slice(5,7).toUpperCase())+(notTitleCase.slice(7));
console.log(newTitleCase);