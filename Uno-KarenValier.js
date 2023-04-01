/*
Exercise #1
Copy the code below into your workspace:
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  // your code here
}
printOutString();
Complete the function to print out the string: This is a sentence.
*/


let arr = ["This", "is", "a", "sentence."];
function printOutString(arr) {
    let fullWord = ''
     arr.forEach(word => {
        fullWord += ` ${word}`;
     }
     );
     return fullWord;
}

console.log(printOutString(arr));