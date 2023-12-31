{
    /**
     * 
Hoisting is a behavior in JavaScript where variable and function 
declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. 
This means that you can use variables and functions before they are declared in your code. However, 
it's important to note that only the declarations are hoisted, not the initializations.
     */

    {
        // console.log(x); annot access before initialization
        let x = 20
        console.log(x);
    }
    {
        // calling function 
        fun() //-------> true
        function fun() {
            console.log("function called");
        }
    }
    {
        // func()
        // console.log(func());  // ----> false
        let func = function () {
            console.log("function using variable");
        };
    }
}