"use strict";

/***********************************************************
 *
 * In which scope is demonstrated.
 *
 **********************************************************/

var a = 1, b = 2, c = 3;
(function firstFunction(){
    var b = 5, c = 6;

    (function secondFunction(){
        var b = 8;

        console.log("a: "+a+", b: "+b+", c: "+c);           //  Desired output was a:1, b:8, c:6, so output log was placed here.

        (function thirdFunction(){
            var a = 7, c = 9;

            (function fourthFunction(){
                var a = 1, c = 8;
            })();
        })();
    })();
})();
