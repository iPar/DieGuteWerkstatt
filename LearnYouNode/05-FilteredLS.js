"use strict";

/***********************************************************
 *
 * Wherein a list of files with a particular extension found
 * within a particular directory are output via stdout to
 * the screen/console.  Directory and extension are provided
 * at the CLI using the full path ('/dir/sub') and 'txt',
 * respectively.
 *
 **********************************************************/
                                                            //  Require Core Node Modules
var fs = require('fs');                                     //  Module 'fs' for filesystem operations
var path = require('path');                                 //  Module 'path' for handling and transforming file paths
var dir = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir, function (err, list) {
    if (err) throw err;

    for (var i = 0; i < list.length; i++) {                 //  Iterate through 'list' array of filename strings
        if (path.extname(list[i]) === ext) {                //  Compare passed in 'ext' to extension of each file in 'list'
            console.log(list[i]);                           //  Output (stdout) those files with extensions that match 'ext'
        }
    }
});
