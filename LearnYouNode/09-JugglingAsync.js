"use strict";

/***********************************************************
 *
 * In which multiple HTTP GET requests are performed using
 * urls provided as command-line argument(s), and multiple
 * 'data' events are read in as a string and concatenated
 * together for each HTTP GET request.  As these are async
 * calls, the # of completed requests must be tracked so
 * that the responses are not output until all requests have
 * ended.  Note this solution handles any number of urls.
 *
 **********************************************************/

var http = require('http');                                 //  Module for 'http' protocol transfers, but only using 'GET' here
var completed_requests = 0;
var urls = [];
var responses = [];

function sendRequest (index) {                              //  Bulk of solution places within a function call in order for it
    http.get(urls[index], function (res) {                  //    to serve as a 'closure', and thereby pass in 'index' by value,
        var output = '';                                    //    instead of by reference.  NOTE: If this route, or some other route
        res.on('data', function (chunk) {                   //    which creates a 'closure', is not used, the use of async calls
            output += chunk;                                //    will cause 'response[index]' to likely evaluate to whatever the
        });                                                 //    last value of 'index' is (i.e. '3'). As a result only the final
        res.on('end', function () {                         //    request will store its response in 'responses'.
            responses[index] = output;                      //  'responses' array is set according to 'index' value, which is the
            if (++completed_requests >= urls.length) {      //    order in which the requests were made.
                for (var k = 0; k < responses.length; k++) {
                    console.log(responses[k]);              //  'responses' logged to the console (stdout).
                }
            }
        });
    }).on('error', function (e) {                           //  Handles error message logging where http.get returns 'error'.
        console.error(e.message);
    });
}

for (var i = 2; i < process.argv.length; i++) {             //  Loads command-line arguments into 'urls' array.
    urls[i-2] = process.argv[i];
}

for (var j = 0; j < urls.length; j++) {                     //  Loops through 'urls' array, calling 'sendRequest' function for
    sendRequest(j);                                         //    each 'url' in 'urls', passing in 'j' by value, not by reference.
}
