{
    // JavaScript Closures
    // Remember self - invoking functions ? What does this function do?

    const add = (function () {
        let counter = 0;
        return function () { counter += 1; return counter }
    })();

    add();
    add();
    add();

    let addition = (function () {
        count = 0;
        return function () {
            count += 1;
            return count
        };
    })();

    addition();
    addition();
    addition();

    /*The (); at the end of the code is an immediately invoked function expression(IIFE).
    */

    // the counter is now 3
}