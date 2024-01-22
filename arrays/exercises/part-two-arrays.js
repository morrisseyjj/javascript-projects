let cargoHold = ['oxygen tanks', ' space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
cargoHold.splice(5,1,"space tether");
console.log(cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log(cargoHold.pop());

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log(cargoHold.shift());

//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.
cargoHoldnew = cargoHold.push("20 meters")
cargoHoldnew = cargoHold.unshift(1138 );
console.log(cargoHold);


//5) Use a template literal to print the final array and its length.
message = `The New Cargo Hold Array have ${cargoHold.length} items that include ${cargoHold}`;
console.log(message);