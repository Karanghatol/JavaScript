{
    /**
     * Inheritance is process that is inheriting the elements of one block to another
    */

    // example one
    class Car {
        constructor(brand) {
            this.carname = brand;
        }
        present() {
            return 'I have a ' + this.carname;
        }
    }

    class Model extends Car {
        constructor(brand, mod) {
            super(brand);
            this.model = mod;
        }
        show() {
            return this.present() + ', it is a ' + this.model;
        }
    }

    let myCar = new Model("Ford", "Mustang");
    // document.getElementById("demo").innerHTML = myCar.show();
    console.log(myCar.show());
}

// second example
class Car {
    constructor(name) {
        this.carname = name
    }
    put_() {
        return `i have ${this.carname}`
    }
}
class Model extends Car {
    constructor(name, mod) {
        super(name)
        this.model = mod
    }
    show() {
        return `${this.put_()} of ${this.model} model`
    }
}
let obj = new Model('BMW', 'Zseries')
console.log(obj.show());

// another example
class x {
    constructor(a, b) {
        this.m = a
        this.n = b
    }
}
class y extends x {
    add() {
        let c = this.m + this.n
        return `addition : ` + c;
    }
}
let obj2 = new y(10, 20)
console.log(obj2.add());