/**
 * In javascript there is no concept of static classess
 */
{
    /**
     *  STATIC METHODS 
     */

    // static methods cannot called by object. it will give an error.
    /**
     * Static class methods are defined on the class itself.
        You cannot call a static method on an object, only on an object class.
     */
    class Car {
        constructor(name) {
            this.name = name;
        }
        static hello(x) {
            return "Hello " + x.name;
        }
    }
    const myCar = new Car("Ford");
    console.log(Car.hello(myCar));

    {
        class Bike {
            static honda(n) {
                n = 'BMW';
                console.log(n);
            }
        }
        let mybike = new Bike();
        Bike.honda(mybike);
    }
}