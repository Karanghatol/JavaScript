{
    /**
     * JavaScript has a set of rules that determine the order in which expressions are evaluated. 
     * This order is known as the "operator precedence." 
     * Operator precedence is important because it defines the order in which different operators are applied 
     * when evaluating an expression.
     */

    {
        // member accessing left to right ., []
        let obj = { name: "karan" }
        console.log(obj.name);
        console.log(obj["name"] + '\n');
    }

    {
        // function call
        function greet(name, lname, age) {
            console.log(`Hello Mr.${name} ${lname} Your age is ${age}`);
        }
        greet("karan", "ghatol", 20)
    }


    {
        /***
         * Here is a breakdown of JavaScript operator precedence, along with examples:

Member Access (Left-to-Right):

Increment/Decrement (Postfix) (Left-to-Right):

++, --
var x = 5;
var y = x++; // y = 5, x = 6
Logical NOT, Bitwise NOT, Unary Plus, Unary Minus, Typeof, Void, Delete (Right-to-Left):

!, ~, +, -, typeof, void, delete
var a = 5;
var b = -a; // b = -5
Exponentiation (Right-to-Left):--------------------
**
var result = 2 ** 3; // result = 8
Multiplication, Division, Remainder (Left-to-Right):--------------------
*, /, %
var result = 10 * 3; // result = 30
Addition, Subtraction (Left-to-Right):--------------------
+, -
var result = 10 + 5; // result = 15
Bitwise Shift (Left-to-Right):--------------------
<<, >>, >>>
var shifted = 8 << 2; // shifted = 32
Relational Operators (Left-to-Right):--------------------
<, <=, >, >=, instanceof, in
var greaterThan = 5 > 2; // greaterThan = true
Equality Operators (Left-to-Right):--------------------
==, !=, ===, !==
var isEqual = "5" == 5; // isEqual = true
Bitwise AND (Left-to-Right):--------------------
&
var result = 5 & 3; // result = 1
Bitwise XOR (Left-to-Right):--------------------
^
var result = 5 ^ 3; // result = 6
Bitwise OR (Left-to-Right):--------------------
|
var result = 5 | 3; // result = 7
Logical AND (Left-to-Right):--------------------
&&
var result = true && false; // result = false
Logical OR (Left-to-Right):--------------------
||
var result = true || false; // result = true
Conditional (Ternary) Operator (Right-to-Left):--------------------
? :
var result = (5 > 2) ? "Yes" : "No"; // result = "Yes"
Assignment Operators (Right-to-Left):--------------------
=, +=, -=, *=, /=, %=, <<=, >>=, >>>=, &=, ^=, |=
var x = 10;
x += 5; // x = 15
         */
    }
}