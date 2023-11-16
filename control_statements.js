// if else :
{
    let a = 23
    if (a == 10) {
        a = 12 - a
        a = a + a / a
        console.log(a)
    } else {
        console.log("false");
    }
}

// else if: also called as ladder

{
    let b = 6, c = 5, d = 4
    if (b > c && b > d) {
        console.log("b is greater : ");
    } else if (c > b && c > d) {
        console.log("c is greater : ");
    } else {
        console.log("d is greater : ");
    }
}

// nested if else

{
    let e = 1
    if (e > 8) {
        if (e > 11) {
            console.log("e is > 11");
        }
        console.log("e > 8 only");
    } else {
        console.log("is < 8");
    }
}
/**
 * break and continue in if else
 * that are used in loop
 */
{
    let g = 5
    if (g = 3) {
        for (let i = 0; i < g; i++) {
            console.log(i);
            continue;
        }
    } 
    if (g = 5) {
        for (let j = 0; j < 5; j++) {
            console.log(j);
            break;
        }
    }
}


/**
 * switch case
 */
{
    let f = 3
    switch (f) {
        case 1:
            console.log("1");
            break;
        case 2:
            console.log("2");
            break;
        case 3:
            console.log("f = 3");
            break;

        default:
            console.log("not anything!");
            break;
    }
}

//goto statement
{
    function main() {
        one()
    } 
    function one() {
        two()
    }
    function two() {
        three()
    }
    function three() {
        console.log("go to statement");
    }
    main()
}


// comments -----------

    // single line 

    /**
     * multiline 
     * .
     * .
     * .
     */

// -----------------------------> loops are in loops.js file