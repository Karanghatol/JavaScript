{
    /**
     * the consept of polymorphism in oop's
     * it allow to use single code in multiple wayes
     */
    {
        class A {
            display() {
                console.log("this is A.");
            }
        }
        class B extends A {
            display() {
                console.log("this is B. ");
            }
        }
        let obj = [new B, new A] // array
        obj.forEach(function (msg) {
            msg.display()
        })
    }

    {
        class A {
            display() {
                console.log("this is A.");
            }
        }
        class B extends A {
            display() {
                console.log("this is B. ");
            }
        }
        let obj = new B
        console.log(obj.display());
    }
}