// tomkami-lib
module.exports.add = function (a,b) { return a + b };

module.exports.multiply = function(a,b) {return a * b};

module.exports.devided = function(a, b) {return a / b};

module.exports.my_max = my_max;
module.exports.my_min = my_min;

// find minimum
function my_min( /*...*/ ) {

    let tellMe = Number.POSITIVE_INFINITY;
    for (i = 0; i < arguments.length; i++)
        if (arguments[i] < tellMe) tellMe = arguments[i];
    return tellMe;
}

// console.log(my_min(-1,-2,-3,10,11,23));
// find maximum
function my_max( /*...*/ ) {

    let tellMe = Number.NEGATIVE_INFINITY;
    for (i = 0; i < arguments.length; i++)
        if (arguments[i] > tellMe) tellMe = arguments[i];
    return tellMe;
}