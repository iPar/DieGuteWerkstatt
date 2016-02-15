"use strict";

/***********************************************************
 *
 * In which the use of an array is demonstrated.
 *
 **********************************************************/

var numbers = [1,2,3,4,5,6,7,8,9,10];                       //  Variable 'numbers' is defined with an array of ten numbers.

var filtered = numbers.filter(function (number) {           //  '.filter()' method is called on the 'numbers' array object.
    return number % 2 === 0;                                //  Only those numbers that do not have a remainder when divided by 2
});                                                          //    are returned (i.e. even numbers) and stored in a new array
                                                            //    named 'filtered'.
console.log(filtered);                                      //  'filtered' is output to the console (stdout)


