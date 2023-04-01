/*
Exercise #5
For each of the exercises below, assume you are starting with the following people array.
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];
Write a command that prints out all of the people in the list.
Write the command to remove "Dani" from the array.
Write the command to remove "Juan" from the array.
Write the command to move "Luis" to the front of the array.
Write the command to add your name to the end of the array.
Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
Write the command that gives the indexOf where "Maria" is located.
At the end of the exercise, there should be 4 people in the array.
*/

let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

//Write a command that prints out all of the people in the list.
console.log('***Printing all the elements of the array***');
people.forEach(element => console.log(element));
//Write the command to remove "Dani" from the array.
people.splice(1, 1);
//Write the command to remove "Juan" from the array.
people.splice(2, 1);
//Write the command to move "Luis" to the front of the array.
let nombre = people.splice(1, 1);
people.unshift(nombre[0]);
//Write the command to add your name to the end of the array.
people.push('Karen');
//Using a loop, iterate through this array and after console.log "Maria", exit from the loop.
console.log('***Loop de Maria***');
for (let i = 0; i <= (people.indexOf('Maria')); i++) {
    console.log(people[i]);
}

//Write the command that gives the indexOf where "Maria" is located.
console.log(`Maria is in the index of: ${people.indexOf('Maria')}`);
//At the end of the exercise, there should be 4 people in the array.
console.log(people);
