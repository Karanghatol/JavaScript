// object's

{
    {
        //object
        let obj = {
            name: 'karan',
            age: 20,
            dist: "chha. Sambhajinagar"
        }
        // console.log(obj);

        {
            let obj2 = {
                func: function func() {
                    // console.log('func');
                },
                address: {
                    galli: 20,
                    city: {
                        village: 'Ranjangaon'
                    }
                }
            }
        }
    }

    {
        let person = {
            age: 50
        }
        person.name = "person"
        person.class = "BCSTY"
        // console.log(person);
    }

    // Array and array methods

    {
        {
            let arr = ['a', 'b', 'c', 'd']
            /**
             * push(element1, ..., elementN): Adds one or more elements to the end of an array
             *  and returns the new length of the array.
             */
            arr.push("e")
            /**
             * pop(): Removes the last element from an array and returns that element.
             */
            arr.pop()
            /**
             * shift(): Removes the first element from an array and returns that element.
             */
            arr.shift()
            /**
             * unshift(element1, ..., elementN): Adds one or more elements to the beginning of an array
               and returns the new length of the array.
             */
            arr.unshift('a')
            /**
             * slice(start, end): Returns a shallow copy of a portion of an array into a new array.
             *  start is the start index, and end is the end index (exclusive).
             */
            arr.slice(1, 2)
            /**
             * concat() used to connect two arrays in one 
             */
            let arr2 = [1, 2, 3, 4]
            let addarr = arr.concat(arr2)
            console.log(addarr);
            console.log(arr);
            // console.log(arr.length);

            /**
             * multidaimensional array
             */
            let arr3 = [[1, 2, 3], [4, 5, 6]]
            // console.log(arr3[0][0]);
        }
        // mixed array
        {
            let ma = ['a', 'b', [2, 'new array'], { list: "list" }]
            // console.log(ma[0]);
            // console.log(ma[1]);
            // console.log(ma[2][1]);
            // console.log(ma[3].list);
        }
    }


    /**
     * In JavaScript, the Date object is used to work with dates and times.
     *  It provides methods for creating, getting, and setting dates, 
     * as well as performing various operations on them.
     *  Here are some basic examples of working with dates in JavaScript:
    */

    /**
    Creating a Date Object:
    You can create a new Date object using the new Date() constructor:
     */
    {
        {
            // current date 
            let currentdate = new Date()
            console.log('current date : ' + currentdate);

            // different components of date using methods 
            let y = currentdate.getFullYear()
            let m = currentdate.getMonth() // month is 0 indexed ex: 0 = january 11 = dec
            let d = currentdate.getDay()
            let h = currentdate.getHours()
            let mnt = currentdate.getMinutes()
            let sec = currentdate.getSeconds()
            console.log(`current date: ${y}-${m + 1}-${d}`); // use it ``
            console.log(`current time : ${h}:${mnt}:${sec}`);

        }
        {
            /**Setting Date Components:
             * You can also set different components of a date using the corresponding methods:
            */
            let mkdate = new Date()
            mkdate.setFullYear(2004)
            mkdate.setMonth(8 - 1)  // - 1
            mkdate.setDate(27)
            mkdate.setHours(12)
            mkdate.setMinutes(0)
            mkdate.setSeconds(0)
            console.log(mkdate);
        }
        {
            /**
             * Formatting Dates:
                Formatting dates for display purposes can be done using various methods,
                or you might want to use external libraries like moment.js for more advanced formatting.
             */
            let currentDate = new Date();

            // Format: YYYY-MM-DD HH:mm:ss
            let formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

            console.log(formattedDate);

        }
    }

    // Math
    // JavaScript provides a built -in Math object that contains a variety of mathematical constants and functions.
    // Here are some common mathematical operations and functions you can perform using the Math object:
    {
        // Mathematical Constants:
        {
            // Basic Arithmetic
            //Returns the absolute value of a number.
            console.log("Absolute value:", Math.abs(-5));          // Output: 5
            // Returns the result of raising x to the power of y.
            console.log("Power:", Math.pow(2, 3));                  // Output: 8

            // Rounding
            // Returns the value of a number rounded to the nearest integer.
            console.log("Rounded value:", Math.round(3.75));        // Output: 4
            //  Returns the largest integer less than or equal to a given number.
            console.log("Floor value:", Math.floor(3.75));          // Output: 3
            // Returns the smallest integer greater than or equal to a given number.
            console.log("Ceiling value:", Math.ceil(3.75));         // Output: 4
            // Returns the integer part of a number by removing the fractional part.
            console.log("Truncated value:", Math.trunc(3.75));      // Output: 3

            // Random Number Generation
            // Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
            console.log("Random number:", Math.random());           // Output: A random decimal between 0 (inclusive) and 1 (exclusive)
            // Generates a random integer between min (inclusive) and max (exclusive).
            console.log("Random integer:", Math.floor(Math.random() * (10 - 1)) + 1);  // Output: A random integer between 1 (inclusive) and 10 (exclusive)

            // Trigonometric Functions
            //  Returns the sine of a number.
            console.log("Sine:", Math.sin(Math.PI / 4));            // Output: 0.7071067811865475
            //  Returns the cosine of a number.
            console.log("Cosine:", Math.cos(Math.PI / 4));          // Output: 0.7071067811865476
            // Returns the tangent of a number.
            console.log("Tangent:", Math.tan(Math.PI / 4));         // Output: 0.9999999999999999
            // Returns the arcsine(inverse sine) of a number.
            console.log("Arcsine:", Math.asin(0.5));                // Output: 0.5235987755982989
            // Returns the arccosine(inverse cosine) of a number.
            console.log("Arccosine:", Math.acos(0.5));              // Output: 1.0471975511965979
            //    Returns the arctangent(inverse tangent) of a number.
            console.log("Arctangent:", Math.atan(1));               // Output: 0.7853981633974483

            // Exponential and Logarithmic Functions
            //  Returns e raised to the power of x.
            console.log("Exponential:", Math.exp(2));               // Output: 7.3890560989306495
            //  Returns the natural logarithm(base e) of a number.
            console.log("Natural Logarithm:", Math.log(10));        // Output: 2.302585092994046
            //  Returns the base 10 logarithm of a number.
            console.log("Base 10 Logarithm:", Math.log10(100));     // Output: 2

            // Square Root
            //  Returns the square root of a number.
            console.log("Square Root:", Math.sqrt(9));              // Output: 3

            // Constants
            // Mathematical constant representing the ratio of a circle's circumference to its diameter.
            console.log("PI:", Math.PI);                            // Output: 3.141592653589793
            // Mathematical constant representing the base of the natural logarithm.
            console.log("E:", Math.E);                              // Output: 2.718281828459045

        }
    }

    {
        
    }

}

/*
// ---------------------------------------           String.js         ----------------------------------
*/

