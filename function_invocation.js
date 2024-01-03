{
    /**
     * Function invocation in JavaScript refers to the process of calling a function to execute its code. 
     * There are several ways to invoke a function in JavaScript, and each method has its own context and implications.
     */

    // 1 function expression
    const seyHello = function(fname, lname, age) {
        console.log(`hello Mr. ${fname} ${lname} your age is ${age}`);
    }

    // 2 function declaration
    function fun(fname, lname, age) {
        console.log(`hello Mr. ${fname + lname} your age is ${age}`);
    }
    seyHello('karan', 'ghatol', 20)
    fun('karan', ' ghatol', 20)

    // 3 method invocation
    const demo = {
        name: 'karan ghatol',
        greet: function() {
            console.log(`hello Mr.${this.name}`);
        }
    }
    demo.greet();

    // 4 constructor invocation
    function const_demo(n) {
        this.name = n;
        this.greet = () => {
            console.log(`hello Mr.${this.name}`);
        };
    };

    let obj = new const_demo('karan');
    obj.greet();

    // Indirect Invocation(using call or apply):
// The call and apply methods allow you to invoke a function with a specified this value and arguments.

    function greet(name) {
        console.log(`Hello, ${name}!`);
    }

    greet.call(String,'John'); // Indirect invocation using call
    greet.apply(null, ['John']); // Indirect invocation using apply
}