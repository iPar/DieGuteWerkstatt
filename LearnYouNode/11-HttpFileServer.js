"use strict";

/***********************************************************
 *
 * In which a file server is demonstrated, which listens on
 * the port provided as the first command-line argument. It
 * serves the same file to each file request.  The file will
 * be located at the location provided as the second
 * command-line argument.  NOTE: Official nodeschool.io
 * solution is much simpler, using the .pipe() method on the
 * 'createReadStream' call to pipe the 'fs' stream directly
 * to the destination stream, i.e. the 'res' stream in this
 * case.
 *
 **********************************************************/

var fs = require('fs');                                     //  Including 'fs' module as we need to operate on the filesystem.
var http = require('http');                                 //  Including 'http' module to set up 'http' server for file requests.
var server = http.createServer(function (req, res) {        //  'http' server is created.
    var filename = process.argv[3];                         //  Second command-line argument path is stored in 'filename' string.
    var readStream = fs.createReadStream(filename);         //  A file system read stream is created.
    var data = '';

    readStream.on('data', function (chunk) {                //  When 'data' signal is received from the stream, data 'chunk's are
        data += chunk;                                      //  concatenated onto the 'data' string variable.
    });

    readStream.on('end', function () {                      //  When 'end' signal is received, data from the stream is written out.
        res.writeHead(200, { 'Content-Type:': 'text/html' });
        res.end(data);
    });
/*
    res.writeHead(200, { 'Content-Type:': 'text/html' });   //  Here is the 'official' nodeschool.io solution commented out for
                                                            //    reference purposes.
    fs.createReadStream(process.argv[3]).pipe(res);
*/
}).listen(process.argv[2]);
