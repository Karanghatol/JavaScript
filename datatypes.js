/* js has several built in datatypes */
// 1) here are primitive datatypes

/* 
string:
    Represents textual data. Enclosed in single ('') or double ("") quotes.
*/
let str = "hello world!"

/*
Number:
  Represents numeric data, including integers and floating-point numbers.
 */
let int_ = 10
let float_ = 10.3
let double_ = 1.00050505

/*
    Boolean:
        it represents true or false value
*/
let true_ = true
let false_ = false

/*
Undefined:
    its a variable that value is not initialized
*/
let undefined_;

/*
Null:
    Represents the absence of a value or a variable intentionally set to no value.
*/
let null_ = null

/*
Symbol:
    Introduced in ECMAScript 6 (ES6), symbols represent unique identifiers.
    initialized using Symbol() method.
*/
let symbol_ = Symbol("dfd234%^%$^");

/* 2) Object Data Type:
Object: 
    Represents a collection of key-value pairs,
    where each key is a string and each value can be of any data type.
*/
let details = {
    name: "karan",
    age: 20,
    college: "DITMS",
    married: false,
    lang: ['java', 'php', 'js']
}
console.log(details);

/* 3) Composite Data Types:
Array:
    Represents an ordered list of values, each identified by an index or a key.
*/
// 1d array
let array_1d = ['karan', 10, true]
// multidimensional array
let array_md = [[1, 2, 3], ['a', 'b', 'c'], [true, false]]

/*
Function:
    Represents a reusable block of code that written inside a curlybraces ({}).
    declared using 'function' keyword.
    it has return type.
*/
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
    let z = console.log('callback function');
    callback();
} 

/**
 * Higher-Order Functions:

Functions that take one or more functions as arguments or return a function.
Often used in functional programming.
 */
function factor(f) {
    return function(x) {
        return x + f
    }
}
let db = factor('10');
console.log(db("2"));

// 4) Special Data Types:
/*
 * NaN (Not a Number): Represents a value that is not a legal number.
 */
let NaN_ = "string" / 20;

/*
 *Infinity and -Infinity: Represent positive and negative infinity, respectively. 
 */
let inf = Infinity;
let negInf = -Infinity;