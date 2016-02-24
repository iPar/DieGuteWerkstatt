"use strict";

/***********************************************************
 *
 * In which closures are demonstrated through assigning a
 * value to a variable further up the scope chaing from a
 * function further down the scope chain (nested within).
 *
 **********************************************************/

function foo () {
    quux = 7;
    var bar;
    function zip () {
        var quux;
        bar = true;
    }
    return zip;
}
