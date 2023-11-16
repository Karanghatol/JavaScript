/*
Function:
    Represents a reusable block of code that written inside a curlybraces ({}).
    declared using 'function' keyword.
    it has return type.
    functions are composite datatypes.
    there are types of functions
*/
// function
function func() {
    const string_ = "string: function func()";
    console.log(string_);
} //we have to call the function whenever we need to execute the block
func()

// parameterized function
function param(j, k) {
    console.log(j + k);
}
param(1, 5)

// default function with function expression (using variable name)
let default_ = function (d = 2, e = 3) {
    console.log(d * e);
}
default_(1) //if we provide 1 or 0 value to both or one parameter it will take default as d = 2, e = 3

// Arrow fiunction
let arrow = (p = 20, q = 5) => p + q;
console.log(arrow);

// IIFE (Immediately Invoked Function Expression):
(function () {
    console.log("i am IIFE");
})()

/*
 * Callback Functions:

Functions passed as arguments to other functions, to be executed later.
Commonly used in asynchronous programming.
 */
function callback() {
    let z = 'callback function'
    console.log(z);
    callback();
}

/**
 * Higher-Order Functions:

Functions that take one or more functions as arguments or return a function.
Often used in functional programming.
 */
function factor(f) {
    return function (x) {
        return x + f
    }
}
let db = factor('10');
console.log(db("2"));