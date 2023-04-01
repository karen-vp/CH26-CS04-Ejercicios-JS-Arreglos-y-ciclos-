/*
Exercise #3
Write a program to compute the sum and product (multiplication) of an array of numbers. Print out the sum and the product.
Example: Given an array [1, 2, 3, 4] The sum is 10. The product is 24.

*/
const numbers = [1, 2, 3, 4];
const numbers2 = [2, 3, 4, 5];
function sumAndProduct(arr) {
    let sum = 0;
    let product = 1;
    arr.forEach(element => {
        sum += element;
        product *= element;
    });
   
    return `The sum is: ${sum} and the product is: ${product}`
}
console.log(sumAndProduct(numbers));
console.log(sumAndProduct(numbers2));