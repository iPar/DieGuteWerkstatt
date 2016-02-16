"use strict";

/***********************************************************
 *
 * In which an HTTP GET request is performed using a url
 * provided as the first command-line argument, and multiple
 * 'data' events are read in as a string and concatenated
 * together, before the total length of the concatenated
 * string is output to the console (stdout), followed by the
 * concatenated string.
 *
 **********************************************************/

var http = require('http');                                 //  Module for 'http' protocol transfers, but only using 'GET' here
var url = process.argv[2];                                  //  Assign first command line argument to the variable 'url'

http.get(url, function (res) {                              //  Node provided convenience '.get()' method
    var output = '';                                        //  Definition of 'output' string variable to hold concatenated data.
    res.setEncoding('utf8');                                //  Set encoding to read in as a string rather than as a buffer object
    res.on('data', function (chunk) {
        output += chunk;                                    //  Each 'chunk' of data received is concatenated to the 'output' var.
    });
    res.on('end', function () {                             //  Once the 'end' of the data stream is encountered, the desired
        console.log(output.length);                         //  output is logged to the console (stdout), beginning with the total
        console.log(output);                                //  number of characters in the 'output' string, followed by the
    });                                                     //  contents of the 'output' string itself.
}).on('error', function (e) {                               //  Error log any errors
    console.error(e.message);
});
