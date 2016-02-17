"use strict";

/***********************************************************
 *
 * In which an HTTP server only recieves POST requests and
 * converts the incoming POST bodies into upper-case and
 * returns it to the client.  The server listens on the port
 * provided as the first command-line argument.
 *
 **********************************************************/

var map = require('through2-map');                          //  Node module for using 'map' functionality on streams similar to
var http = require('http');                                 //  'map' functionality on Arrays.prototype.map.

var server = http.createServer(function (req, res) {        //  http server created.
    if (req.method != 'POST') {                             //  If not a 'POST' method, functions returns error message.
        return res.end('Please send via POST\n');
    }

    req.pipe(map(function (chunk) {                         //  Use 'pipe' to pipe from readable stream 'req' to through2-map
        return chunk.toString().toUpperCase()               //  function 'map' to then pipe to writable stream 'res'.
    })).pipe(res);
}).listen(Number(process.argv[2]));                         //  Port provided at command-line.
