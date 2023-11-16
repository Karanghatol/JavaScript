/* 
    variables are used to store data in manages way 
        * variables are case sensitive.
        * cannot start with numbers 
        * only start with unserscore(_) or a-z, A-Z
        * they should not be a keyword, like if, let, or etc...
*/
// here are some examples to declare variables in JS


/* Declaration:

You can declare variables using the var, let, or const keyword.

*/

/* 
var:
    * variable declared with 'var' then it's accessible for globlly
    * inside and outside the block
    * it could be reassigned
*/
var var_ = 20; //int 
var var_s = "string"; //string...

/*
let:
    * Variables declared with "let" and "const" are block-scoped,
    * meaning their scope is limited to the block (enclosed by curly braces) in which they are declared.
    * it could be reassigned
*/

let a = true; //boolean
let b = 'c'; //char

// demostration of global and local variable.
void function demo() {
    if (true) {
        var g = "global"
        let l = "local"
        console.log(g); // true
        console.log(l); // true
    }
    console.log(g); // true
    console.log(l); // false
}

/* 
const :
    * Variables declared with const cannot be reassigned.
        ex:
            const m = 10;
            m = 20; // gives error
*/ 

const x = 2.03; // float
