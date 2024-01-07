{
    /**
     * "async and await make promises easier to write".

        async makes a function return a Promise.

        await makes a function wait for a Promise.
    */
    {
        // Async syntax

        async function fname() {
            document.write("async demo function <br>")
        };
        // this function is same as 
        function lname() {
            return Promise.resolve("async without async with Promise <br />");
        }

        document.write(lname());  // both are same
        //fname();  // both are same

        // lets ue the async

        function display(data) {
            document.getElementById('demo').innerHTML = data;
        }
        lname().then(
            function (value) { display(value) },
            function (error) { display(error) }
        );
    }
    {
        /**
         * Let's see an example 
         */

        async function weather() {
            let puneW = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("29 deg");
                }, 3000);
            });

            let csW = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve("20 deg");
                }, 6000);
            });

            console.log("fething pune's weather...");
            console.log("pune's weather : " + await puneW);
            console.log("fething chhatrapati sambhajinagar's weather...");
            console.log("chhatrapati sambhajinagar's weather : " + await csW);
            return [puneW, csW];
        }
        weather().then((value) => {
            console.log((value));
        });
    }
}