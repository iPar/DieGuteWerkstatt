"use strict";

/************************************************
 *
 * In which one or more arguments are accepted as
 * command line arguments, adds them together and
 * prints them out (stdout).
 *
 ***********************************************/

var sum = 0;

for (var i = 2; i < process.argv.length; i++) {   //  Iterates through argv array beginning at third position of args on cli.
    sum += Number(process.argv[i]);               //  Converts argv[i] argument, which is a string, into a number and adds it
}                                                 //  to sum.

console.log(sum);
