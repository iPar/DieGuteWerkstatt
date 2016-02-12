"use strict";

/***********************************************************
 *
 * Wherein a module for export to 06-MakeItModular.js is
 * defined in order to carry out the heavy lifting of task
 * at hand - printing out the names of files from a CLI
 * provided directory path and extension.
 *
 **********************************************************/

var fs = require('fs');                                     //  Module 'fs' for filesystem operations
var path = require('path');                                 //  Module 'path' for handling and transforming file paths

module.exports = function (dir, ext, callback) {            //  Exporting a single function with this module, so left anonymous
    ext = '.' + ext;                                        //  Prefix a '.' to the desired file extension

    fs.readdir(dir, function (err, list) {
        if (err) return callback(err, null);                //  Sends callback with error and no results
        var result = [];                                    //  Create array to hold filtered results
        for (var i = 0; i < list.length; i++) {             //  Iterate through 'list' array of filename strings
            if (path.extname(list[i]) === ext) {            //  Compare passed in 'ext' to extension of each file in 'list'
                result[result.length] = list[i];            //  Added file names with matching extensions in 'list' into 'result'
            }
        }
        callback(null, result);                             //  Sends callback with no error and filter results
    });
};
