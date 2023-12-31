{
    /**
     * Here are some common scenarios where this behaves differently:
     */

    console.log(this); // points to the global object (e.g., window in a browser)

    function fun() {
        console.log(this);  //  'this' refers to the global object (e.g., window)
    }

    let obj = {
        mymethod: function () {
            console.log(this);  //  'this' refers to obj
        }
    }

    {
        function ClassFun() {
            this.variable = 'this variable with this'
        }
        let obj = new ClassFun()
        console.log(obj.variable); // refers to the  obj
    }

    {
        /**
         * Event handerlers:
         */
        // document.getElementById("btn").addEventListener('click', function () {
        //         console.log(this); // refers to the btn of button
        //     });
    }

    {
        // arrow functions 
        let arrow = (a = 20) => {
            console.log(arrow);
            console.log(this);
        }
    }
}