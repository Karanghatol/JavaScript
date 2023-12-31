{
     /**
      * prototype is an object itself. 
      * The prototype is used to provide inheritance, 
      * which allows objects to inherit properties and methods from other objects.
      */


     /**
      * 1. Prototype Chain
      * 2. Constructor Functions
      * 3. Object.create()
      * 4. Prototype Property
      * 5. Prototype Inheritance
      * 6. ES6 Class Syntax
      */
}
{
     /**
     * 1. Prototype Chain*/
     //     Using the prototype Property
     // The JavaScript prototype property allows you to add new properties to object constructors:

     // Example
     function Person(first, last, age, eyecolor) {
          this.firstName = first;
          this.lastName = last;
          this.age = age;
          this.eyeColor = eyecolor;
     }

     Person.prototype.nationality = "English";

}