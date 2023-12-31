{
    /**
     * arrow keys are defined with => 
     * arrow functions are short of function 
     * we can define a function without using 'function' keyword*/

    // method
    let arrow = () => {
        console.log("this arrow function");
    }
    arrow()

    let add = (a, b) => b + a;
    console.log(add(10, 30)); //  15

    {
        // function using function keyword
        function fun(a = 'function') {
            console.log(a);
        }
        fun()

        // using =>
        afunc_ = (b = 'arrow') => {
            console.log(b);
        } 
        afunc_()
        // or we can write in one line
        ex = (m, n) => console.log(m + ' ' + n);
        ex('karan', 'ghatol')
    }


}