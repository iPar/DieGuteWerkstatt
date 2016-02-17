"use strict";

/***********************************************************
 *
 * In which a TCP time server is demonstrated, which listens
 * for TCP connections on ports provided at the command-line
 * and writes the formatted date and time for each
 * connection as a string and then closes the connection.
 *
 **********************************************************/

function xxFormat (num) {                                   //  This function formats number to desired 'XX' format.
    var str = num.toString();                               //  Passed in 'num' integer must be typed to string for formatting.
    if (str.length < 2)                                     //  If 'str' string is less than two (2) in length, a zero is added
        str = '0' + str;                                    //    to the front.
    return str;                                             //  Formatted 'str' string is returned to calling scope.
}

function dateStamp () {                                     //  This function creates a new Date object then stores the various
    var date = new Date();                                  //    date components in 'stamp' string variable after passing
    var stamp = date.getFullYear() + '-';                   //    components to 'xxFormat' function for proper formatting by
    stamp += xxFormat(date.getMonth()+1) + '-';             //    concatenating the formatted components onto the 'stamp' string
    stamp += xxFormat(date.getDate()) + ' ';                //    variable.
    stamp += xxFormat(date.getHours()) + ':';
    stamp += xxFormat(date.getMinutes()) + '\n';

    return stamp;                                           //  Properly formatted 'stamp' string variable is returned to calling
}                                                           //    scope.

var net = require('net');                                   //  Module for 'net' is required for raw TCP networking funcions.
var server = net.createServer(function (socket) {           //  Server is created with the required callback function.
    socket.end(dateStamp());                                //  'dateStamp' function called and written to the 'socket' using
});                                                         //    the 'end' method.
server.listen(process.argv[2]);                             //  Server listens to TCP port specified as first command-line argument.
