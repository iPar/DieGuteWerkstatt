"use strict";

/************************************************
 *
 * In which a single sychronous filesystem
 * operation is to read a file and print the
 * number of newlines (\n characters) it contains
 * to the console (stdout).
 *
 ***********************************************/

var fs = require('fs');                                 //  Require the node module 'fs' for filesystem operations
var str = fs.readFileSync(process.argv[2]).toString();  //  Read file in argv[2] position in, convert it to a string and assign
var count = 0;                                          //  it to a variable, 'str'.

for (var i = 0; i < str.length; i++) {                  // Iterate through every character in 'str', and increment 'count' for
    if (str[i] === '\n') {                              // every newline ('\n') character encountered.
        count ++;
    }
}

console.log(count);
