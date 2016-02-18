"use strict";

/***********************************************************
 *
 * In which an HTTP server serves JSON data when it receives
 * GET requests.  It will have two (2) endoints: 
 *    1) for GET requests for the path '/api/parsetime', for
 *       which the server will anticipate a query string, an
 *       'iso' key and an ISO-formatted time as a value.
 *    2) for GET requests for the path '/api/unixtime', for
 *       which the server will receive the same query, but
 *       will return the UNIX epoc time in milliseconds.
 * The server will listen on the port provided as the first
 * argument at the command-line.
 *
 **********************************************************/

var url = require('url');                                   //  Core node module for url manipulation
var http = require('http');                                 //  Core node module for http communications

function parseTime (time) {                                 //  Function returns an object with hour, minute, second keys set
    return {                                                //  using the Date.get methods off the 'time' Date variable passed in.
        'hour': time.getHours(),
        'minute': time.getMinutes(),
        'second': time.getSeconds()
    };
}
function unixTime (time) {                                  //  Function returns an object with the UTC milliseconds set using the
    return { 'unixtime': time.getTime() };                  //  Date.getTime() method on the 'time' Date variable passed in.
}

var server = http.createServer(function (request, response) { //  Creates an http server
    if (request.method != 'GET')                              //  Confirms requesting method is 'GET', otherwise an error message is
        return response.end('Please send GET request.\n');    //    in the response.

    var getObject = url.parse(request.url, true, true);       //  Uses url.parse() method, passingi in the url on the request.
    var query = getObject.query.iso;                          //  Sets 'query' variable to the query.iso on the request object.
    var pathname = getObject.pathname;                        //  Sets 'pathname' variable to the pathname on the request object.
    var route = pathname.slice(5, pathname.length);           //  Sets 'route' variable to portion of the pathname after '/api/'.

    if ( route === 'parsetime' )                              //  If 'parsetime' get, parseTime() function is called after
        var returnObject = parseTime(new Date(query));        //    creating a new Date object using the iso query string in
    else if (route === 'unixtime' )                           //    'query'.  unixTime() function is called in a similar if
        var returnObject = unixTime(new Date(query));         //    'route' is 'unixtime'.
    else
        return response.end('Incorrect route.\n');            //    Response ended if an unexpected route is received.

    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(returnObject));               //  Stringify the returnObject for transmittal via .end() method.

}).listen(Number(process.argv[2]));                           //  Listen on port supplied as first command-line argument.

