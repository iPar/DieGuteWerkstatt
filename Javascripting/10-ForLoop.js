"use strict";

/***********************************************************
 *
 * In which the use of a for loop is demonstrated, adding
 * the variable being iterated over to another variable, to
 * sum the values of iteration.
 *
 **********************************************************/

var total = 0,                                              //  Variable 'total' is defined with a number value of 0.
    limit = 10;                                             //  Variable 'limit' is defined with a number value of 10.

for (var i = 0; i < limit; i++) {                           //  Iterate through the loop for so long as 'i' is less than
    total += i;                                             //    'limit', which is ten (10) loops through, adding 'i'
}                                                           //    to 'total' with each iteration.

console.log(total);                                         //  'total' is output to the console (stdout)
