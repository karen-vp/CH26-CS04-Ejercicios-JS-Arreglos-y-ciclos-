/*
Exercise #2
Write a function that:
Takes in an array of numbers.
Doubles the value of each number in the array.
Prints out the new updated array.
Example: Given an array [1, 2, 4, 5]. The output should be [2, 4, 8, 10]*/
const numbers = [1, 2, 4, 5];
function doubleTheValue(arr) {
    const arrayDouble = []
     arr.forEach(number => {
        arrayDouble.push(number+=number);
    });
    return arrayDouble;
}

console.log(doubleTheValue(numbers));