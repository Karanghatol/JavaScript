{
    /**
     * ECMAScript 5 (2009) added a lot of new Object Methods to JavaScript.
     */


    /**
     * ________________________________________________________________________
     * |writable     :  |true    |         Property value can be changed      |
     * |----------------|--------|--------------------------------------------|
     * |enumerable   :  |true    |       Property can be enumerated           |
     * |configurable :  |true    |     Property can be reconfigured           |
     * |writable     :  |false   |        Property value can not be changed   |
     * |enumerable   :  |false   |      Property can be not enumerated        |
     * |configurable :  |false   |    Property can be not reconfigured        |
     * ------------------------------------------------------------------------
     */
    {
        let object = {
            student: false,
            get name() {
                console.log(`hello my name is ${this.name_}, student: ${this.student}`);
            }
        }
        // Create object with an existing object as prototype
        let obj = Object.create(object)
        obj.name_ = 'Karan';
        obj.student = true;
        obj.name

        // second type to create object
        const animalPrototype = {
            miyao: function () {
                console.log("miyaaaaoo miyaoooo mmm mm mmm");
            }
        };
        const cat = Object.create(animalPrototype, {
            breed: {
                value: 'Mani miyao',
                writable: true,
                enumerable: true
            }
        });

        console.log(cat.breed);  // Output: 'Siamese'
    }

    {
        /**
         * Object.defineProperty() is a method in JavaScript that allows you 
         to add a new property to an object or modify an existing property. 
         */
        let object = {
            carName: 'BMW',
            model: 'b3N20a',
        };
        // Adding or changing an object properties
        Object.defineProperties(object, {
            color: {
                value: 'RED',
                writable: true,
            },
            seater: {
                value: {
                    four: 4,
                },
                value: {
                    two: 2,
                },
                value: {
                    seven: 7,
                },
            },
        });

        console.log(object.color); // 'one'
        console.log(object.seater.seven); // 7
        console.log(object.seater); // default: 4 --> first property
    }

    {
        // Adding or changing object property
        let object = {
            id: 1,
            name: 'karanghatol',
        };


        /**
         * for changing the values of property we need to write 
         * Writtable: true,
         * enumarable: true,
         * configurable: true,
         */

        Object.defineProperty(object, 'aadhar', {
            value: '1111 1111 1111 1111',
            writable: true,
            enumerable: true,
            configurable: true,
        });
        // can change the aadhar no with 'writtable'
        /* Ex. */ object.aadhar = '9876 5432 1001 2345';
        console.log(object.aadhar); // 'value'

        // we cannot delete the 'aadhar'
        delete object.aadhar
        // can delete 'name'
        // delete object.name

        /***
         * using setters and getters
         */
        let person = {}
        let std_id = 101;
        Object.defineProperties(person, {
            id: {
                value: {
                    id: 1,
                },
            },
            name: {
                value: 'karanghatol',
            },
            student_id: {
                get: () => std_id,
                set: (newval) => std_id = newval,
            }
        });
        person.student_id = 202
        console.log(person.student_id);
    }
    {
        // assingning value from one object to another
        let obj_1 = {
            name: 'karan',
            age: 20,
            student: true
        }
        /*                      into,   from
                                   |     |                   */
        let clone = Object.assign({}, obj_1);
        clone.name = 'RAM'
        console.log(clone); // name = RAM
        console.log(obj_1); // name = karan        
    }

    {
        // Object.getOwnPropertyDescriptor(object, property)

        /**
         * The Object.getOwnPropertyDescriptor() static method returns an object describing the configuration of a specific
         *  property on a given object (that is, one directly present on an object and not in the object's prototype chain). 
         * The object returned is mutable but mutating it has no effect on the original property's configuration.
         */
        let obj = {
            id: 101,
            name: 'karanghatol',
        };

        Object.getOwnPropertyDescriptor(obj, 'name');
        console.log(Object.getOwnPropertyDescriptor(obj, 'id'));
        /**
         * * OUTPUT:-
         * 
         * {value: 'karan', writable: true, enumrable: true, configurable: true}; 
         * [[Prototype]]: Object
         */
    }

    {
        /**
         * The Object.getOwnPropertyNames() static method returns an array of all properties 
         * (including non-enumerable properties except for those which use Symbol) found directly in a given object.
         */
        let obj = {
            dist: 'Chhatrapati Sambhajinagar',
            state: 'Maharashtra',
            country: 'India',
        }
        console.log(Object.getOwnPropertyNames(obj));
        /**
         * [ 'dist', 'state', 'country' ]
         */
    }

    {
        let obj = { prop1: "property one", prop2: 'property two' };
        let obj2 = Object.create(obj)
        console.log(Object.getPrototypeOf(obj2) === obj); // true
    }

    {
        // Returns enumerable properties as an array
        let obj = {
            laptop: 'lenovo',
            processor: 'Ryzen',
            ram: 8,
            gaming: false,
            price: 45000.30,
        }
        console.log(Object.keys(obj));
        /**
         * [ 'laptop', 'processor', 'ram', 'gaming', 'price' ]
         */
    }

    {

    }
}

// Protecting Objects  --------------------------
{
    {
        // Prevents adding properties to an object
        let obj = {
            name: 'xyz',
        }
        Object.preventExtensions(obj);
        obj.lname = 'abc'; // we canot add external property into object 
        console.log(obj.name);

        {
            // Returns true if properties can be added to an object
            console.log(Object.isExtensible(obj)) // false
        }

        {
            // Prevents changes of object properties (not values)
            console.log(Object.seal(obj));

            {
                // Returns true if object is sealed
                console.log(Object.isSealed(obj));
            }
        }

        {
            // Prevents any changes to an object
            console.log(Object.freeze(obj));
            console.log(obj.name = 20);
            console.log(Object.freeze(obj)); // { name: 'xyz' } because its freezed
            {
                // Returns true if object is frozen
                console.log(Object.isFrozen(obj)); // return true
            }
        }
    }
}