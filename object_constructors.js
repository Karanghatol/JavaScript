{
    /**
     * Object constructors are functions that are used as templates for creating objects with similar properties and methods. 
     * These constructors typically use the this keyword to refer to the object being created and assign properties or methods to it.
     */

    {
        // writting first letter in CAPITAL is a good practice
        function Person(n, a, fc = null) {
            this.name = n
            this.age = a
            this.fcolor = fc
            return `name : ${this.name}age : ${this.age}favorite Color : ${this.fcolor} `
        }
        let karan = new Person('karan ghatol', 20, 'purpal')
        console.log(karan.name);
        console.log(karan.age);
        console.log(karan.fcolor);
        Person.prototype.class_ = "BCS"
        console.log(karan.class_);

        let arjun = new Person('arjun ghatol', 19)
        console.log(arjun.name);
        console.log(arjun.age);
        console.log(arjun.fcolor);

    }
}