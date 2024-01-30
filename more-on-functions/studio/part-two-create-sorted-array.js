// JM FUNCTION FROM PART 1. NEEDED to copy from part 1 for part 2
function findMinium(array){
  let min = array[0];
  // for loop that goes through the array and checks fi the current [i] is less then the previous. if it is then assign it to "min" variable
  for (let i = 1; i < array.length; i++){
     if (array[i] < min) {
      min = array[i];
     } 
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...
function sortNumbers(array) {
//1
	let sortedArray = [];
//4 loop repeats
	while (array.length > 0) {
//2
		let min = findMinium(array)
//3  push "min" number into the new array (SortedArray)
		sortedArray.push(min);
//remove "min" number from old array 
		array.splice(array.indexOf(min), 1);	
	}
//5
	return sortedArray;
}


/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */

//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//6 print
console.log(sortNumbers(nums1));
console.log(sortNumbers(nums2));
console.log(sortNumbers(nums3));