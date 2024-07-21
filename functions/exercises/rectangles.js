
function makeLine(size) {
    let line = "";
    for (let i = 0; i < size; i++) {
      line += "#";
    }
    return line;
  }
 console.log(makeLine(5));
 console.log("PART 2");

 function makeSquare (size) {
    let square = "";
    for (let i = 0; i < size; i++) {
        square = square + (makeLine(size) + "\n");
    }
// removes the last \n
    return square.slice(0,-1);
 }

console.log(makeSquare(4));

console.log ("PART 3");
function makeRectangle (width, height) {
    let rectangle = "";
    for (let i = 0; i < height; i++){
        rectangle += (makeLine(width) + "\n");
    }
    return rectangle.slice(0, -1);
}
console.log(makeRectangle(5,3))

console.log("PART 4");
function makeDownStairs (height) {
    let stairs = "";
    for (let i = 0; i < height; i++) {
//i start of at 0 and we add 1, next time around i = 1 and whe add 1 make it 2, ect
        stairs += (makeLine(i+1)+ "\n") 
    }
    return stairs.slice(0,-1);
}

console.log(makeDownStairs(5));