"use strict";

/***********************************************************
 *
 * In which scope chaining, i.e. nested scoping, is
 * demonstrated through defining a variable within nested
 * function definitions.
 *
 **********************************************************/

function foo () {
    quux = 7;
    var bar;
    function zip () {
        var quux;
    }
}
