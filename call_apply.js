{
    {
        // call 
        function greet(name) {
            console.log(`Hello, ${name}! My name is ${this.myName}`);
        }

        const person = { myName: 'Alice' };

        greet.call(person, 'Bob');
        // Output: Hello, Bob! My name is Alice

        function hello(std) {
            console.log(`Student : ${std} \nemployee : ${this.emp}`);
        }
        let empl = { emp: false }
        hello.call(empl, true)
    }

    {
        // apply
        function greet(name, age) {
            console.log(`hello, ${name} i am ${this.myname} and you are ${age} years old, and i am ${this.myage}`);
        }

        let person = {myname: 'Karan', myage: 20}
        greet.apply(person, ['Ram', 21]);
    }
}