"use strict";

/***********************************************************
 *
 * In which the use of the '.replace()' method of a string
 * object is demonstrated.
 *
 **********************************************************/

var pizza = 'pizza is alright';                             //  Variable 'pizza' is defined with a string as its value

pizza = pizza.replace('alright', 'wonderful');              //  '.replace' method is implemented on the 'pizza' variable, replacing
                                                            //  the word 'alright' with 'wonderful' within the string
console.log(pizza);                                         //  The 'pizza' string variable is logged to the console (stdout)

