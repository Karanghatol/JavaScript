{
    /**
     * There are two keywords that define the accessors functions: a getter and a setter for the fullName property. 
     * When the property is accessed, the return value from the getter is used. 
     * When a value is set, the setter is called and passed the value that was set.
     */

    {
        // get : declare function/methods as a properties
        {
            // using getter
            let person = {
                name: 'karanghatol',
                get hello() {
                    console.log(`hello ${person.name}`);
                }
            }
            person.hello
        }
        {
            // wothout getter
            let person = {
                name: 'karanghatol',
                hello: function () {
                    console.log(`hello ${person.name.toUpperCase()}`);
                }
            }
            // person.hello()
        }
    }
    // setting the value using setter : set 
    {
        // using set
        {
            let person = {
                name: 'karanghatol',
                set change_name(param) {
                    this.name = param
                },
                get getting() {
                    console.log(`hello ${person.name.toUpperCase()}`);
                }
            }
            person.change_name = "KG"
            person.getting
        }
    }

}