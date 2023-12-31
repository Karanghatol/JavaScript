{
    /**
     *  a class is a blueprint for creating objects with a shared structure and behavior. 
     * It provides a convenient way to define and create objects with a similar structure and functionality. 
     * The class syntax was introduced in ECMAScript 6 (ES6) and is built on top of the 
       prototype-based inheritance model that JavaScript has always had.
     */

    //    example of js class
    {
        class parent {
            // properties of classs
            param = "parameter of constructor"

            // creating constructor of class
            constructor(param) {
                this.param
                this.property1 = 'property one'
                this.property2 = 'property two'
                this.property3 = 'property three'
                console.log(param)
            }

            // creating methods in class
            method2() {
                console.log('method 2');
            }

            method3() {
                console.log('method 3');
            }
        }

        // creating objects of class
        let obj = new parent('cosntruct'); // calling constructor
        console.log(obj.param); // calling param property
        // calling method
        console.log(obj.method2());
    }

    {
        //example
        class person {
            constructor(n, a) {
                if (typeof a === 'number') {
                this.name = n
                this.age = a
                } else {
                    console.log('age must be integer');
                }
            }

            sayDetails = () => {
                console.log(`hello your name is ${this.name} and your age is ${this.age}`);
            }
        }
        let obj = new person('RAM', 20)
        console.log(obj.sayDetails());
    }
}