"use strict";

/***********************************************************
 *
 * Wherein an external filter module is used to complete the
 * desired filtering task.
 *
 **********************************************************/

var filterModule = require('./06-Filter.js');               //  Require my module, which is just one function.
var dir = process.argv[2];
var ext = process.argv[3];

filterModule(dir, ext, function (err, data) {
    if (err)
        return console.error("Error encountered", err);     //  Error log the error if callback returns error.

    for (var i = 0; i < data.length; i++)                   //  Iterate through returned data using stdout to
        console.log(data[i]);                               //  output all filename strings with extensions
});                                                         //  matching the desired extension, received from
                                                            //  the callback
