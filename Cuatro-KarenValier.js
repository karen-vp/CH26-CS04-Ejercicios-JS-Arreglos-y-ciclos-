/*
Exercise #4
let student1Courses = ['Math', 'English', 'Programming'];
let student2Courses = ['Geography', 'Spanish', 'Programming'];
Create a program that loops over the 2 arrays; if there are any common courses print them out to the console.

*/

const student1Courses = ['Math', 'English', 'Programming'];
const student2Courses = ['Geography', 'Spanish', 'Programming'];


function commonCourses(arr1, arr2){
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j])
                return `The coincidence is: ${arr2[j]}`;
        }
    }
}

console.log(commonCourses(student1Courses, student2Courses));
