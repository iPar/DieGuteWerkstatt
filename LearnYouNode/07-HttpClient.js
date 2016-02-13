"use strict";

/***********************************************************
 *
 * In which an HTTP GET request is performed using a url
 * provided as the first command line argument with the
 * result being output to the screen via stdout.
 *
 **********************************************************/

var http = require('http');                                 //  Module for 'http' protocol transfers, but only using 'GET' here
var url = process.argv[2];                                  //  Assign firt command line argument to the variable 'url'

http.get(url, function (res) {                              //  Node provided convenience '.get()' method
    res.setEncoding('utf8');                                //  Set encoding to read in as a string rather than as a buffer object
    res.on('data', function (chunk) {                       //  Log to the console (stdout) upon receiving a chunk of data
        console.log(chunk);
    });
}).on('error', function (e) {                               //  Error log any errors
    console.log("Got error: " + e.message);
});                                                         //  No explicit 'end' event call necessary as automatic with '.get()'
