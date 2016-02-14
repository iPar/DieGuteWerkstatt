"use strict";

/***********************************************************
 *
 * In which the use of 'if' statements to provide logic
 * (i.e. decision-making) through the use of boolean
 * conditions to a javascript program.
 *
 **********************************************************/

var fruit = 'orange';                                       //  Variable 'fruit' is defined with a string value of 'orange'.

if (fruit.length > 5)                                       //  Boolean condition comparing '.length' property of 'fruit' to 5.
    console.log('The fruit name has more than five characters.'); //  If true, this line prints to console (stdout).
else                                                        //  Else statement handles all situations where above boolean
    console.log('The fruit name has five characters or less.'); //  condition evaluates to 'false', printing this line to
                                                                //  the console (stdout).




