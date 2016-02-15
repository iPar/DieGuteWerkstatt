"use strict";

/***********************************************************
 *
 * In which the use of multiple arguments being passed into
 * a function is demonstrated.
 *
 **********************************************************/

function math (num1, num2, num3) {                          //  Function 'math' is defined, which accepts three arguments, which
    return num1 + num2 * num3;                              //    are three numbers: num1, num2, num3.  num2 and num3 are
}                                                           //    multiplied together, then added to num1 before being returned.

console.log(math(53,61,67));                                //  The returned result from passing three numbers to the math
                                                            //    function is logged to the console (stdout).
