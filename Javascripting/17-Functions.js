"use strict";

/***********************************************************
 *
 * In which the use of a function is demonstrated.
 *
 **********************************************************/

function eat (food) {                                       //  Function 'eat' is defined, which accepts an argument 'food', which
    return food + ' tasted really good.';                   //    can be acted on as any other variable within the function and
}                                                           //    can be return with ' tasted...' added onto it, like so.

console.log(eat('bananas'));                                //    'eat' function is called with 'bananas' as the 'food' argument
                                                            //    passed in.  The value returned from 'eat' is then logged to the
                                                            //    console (stdout).  NOTE: that 'eat' is called within the
                                                            //    the parenthesis of the 'console.log' function.  Where this is
                                                            //    the case, 'eat' will be evaluated before 'console.log' is.
