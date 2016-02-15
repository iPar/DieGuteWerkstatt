"use strict";

/***********************************************************
 *
 * In which the common action of looping through the values
 * within an array is demonstrated.
 *
 **********************************************************/
//  Index:   [0]   [1]   [2]
var pets = ['cat','dog','rat'];                             //  Variable 'pets' is defined as an array of three strings.

for (var i = 0; i < pets.length; i++) {                     //  Loop through all the elements in the array, replacing each
    pets[i] = pets[i] + 's';                                //    element with that element and an 's' concatenated to the end.
}

console.log(pets);                                          //  Output the array to the console (stdout).

