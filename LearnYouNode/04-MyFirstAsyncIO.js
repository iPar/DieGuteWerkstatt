"use strict";

/************************************************
 *
 * In which a single Asychronous filesystem
 * operation is to read a file and print the
 * number of newlines (\n characters) it contains
 * to the console (stdout).
 *
 ***********************************************/

var fs = require('fs');                                     //  Require the node module 'fs' for filesystem operations

fs.readFile(process.argv[2], 'utf8', function (err, data) { //  Pass in argv[2] with the 'utf8' option to receive back a string,
    var count = 0;                                          //  along with a callback function to receive data asynchronously.

    if (err) throw err;         //  If there is an err, the throw statement will end the function and give control to the next catch.

    for (var i = 0; i < data.length; i++) {                  // Iterate through every character in 'data', and increment 'count' for
        if (data[i] === '\n') {                              // every newline ('\n') character encountered.
            count ++;
        }
    }
    console.log(count);         //  (stdout) to print the result for verification.
});
