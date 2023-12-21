{
    /**
     * In JavaScript, type conversion refers to the process of converting a value from one data type to another.
    */

    {
        // Number To String

        // implicit
        let num = 10;
        let string_ = "this is string " + num
        console.log(string_);
        console.log(typeof string_); // string

        // explicit
        let num2 = String(20)
        console.log(num2);
        console.log(typeof num2);

        let num3 = num.toString()
        console.log(num3);
    }

    {
        // String To Number
        let str = "45"
        let num = Number(str)
        console.log(num);
        console.log(typeof num);
    }

    {
        // boolean conversion
        let str = "this is string"
        let tobool = Boolean(str)
        console.log(tobool);
        console.log(typeof tobool);
    }

    {
        // object to primitive
        // implicit 
        let obj = {
            valueof: function() {
                return 20
            }
        }
        var impl = obj.valueof + 8
        console.log(impl);
        console.log(typeof impl);

        // explicit
        let obj2 = {
            val: function() {
                return 50
            }
        }
        let exp = Number(obj.valueof()) + 8
        console.log(exp);
        console.log(typeof exp)
    }
}