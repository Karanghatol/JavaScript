/*
 * Arithmetic Operators:
        Perform mathematical operations.
 */
let a_ = 5;
let b_ = 3;

let sum = a_ + b_; // Addition
let difference = a_ - b_; // Subtraction
let product = a_ * b_; // Multiplication
let quotient = a_ / b_; // Division
let remainder = a_ % b_; // Modulus (remainder after division)

/**
 * Assignment Operators:

Assign values to variables.
 */

let x = 10;
let y = 5;
y += 3; // Equivalent to: y = y + 3;
let z = 8;
z -= 2; // Equivalent to: z = z - 2;
let w = 4;
w *= 6; // Equivalent to: a = a * 6;
let v = 12;
v /= 3; // Equivalent to: b = b / 3;
let u = 7;
u %= 4; // Equivalent to: c = c % 4;
let t = 2;
t **= 3; // Equivalent to: d = d ** 3;

/*
Comparison Operators:

Compare values and return a Boolean result(true or false).
*/
let a = 10;
let b = 5;

// Equality
console.log(a == b);  // false
console.log(a === b); // false

// Inequality
console.log(a != b);  // true
console.log(a !== b); // true

// Greater Than
console.log(a > b);   // true

// Less Than
console.log(a < b);   // false

// Greater Than or Equal To
console.log(a >= b);  // true

// Less Than or Equal To
console.log(a <= b);  // false

/**
 * logical operators :
 *  &&, ||, !
 */
let _x = true;
let _y = false;

console.log(_x && _y); // Logical AND
console.log(_x || _y); // Logical OR
console.log(!_x);      // Logical NOT


/*
Unary Operators:
    Operate on a single operand.
 */
let a__ = 5;

console.log(-a__); // Unary negation
console.log(++a__); // Increment
console.log(--a__); // Decrement

/**
 * Conditional (Ternary) Operator:

A shorthand for an if-else statement.
? : 
 */

let age = 18
let check = (age >= 10) ? 'adult' : 'minor';

/**
 * Bitwise Operators:

Perform bitwise operations on integer values.
 */

let a___ = 5; // Binary representation: 0101
let b___ = 3; // Binary representation: 0011

console.log(a___ & b___); // Bitwise AND
console.log(a___ | b___); // Bitwise OR

/**
 * String Concatenation Operator:

Concatenates two strings.
 */

let str1 = "ssfsf"
let str2 = "fvdsdsvvr"
console.log(str1 + " " + str2);