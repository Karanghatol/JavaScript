{
    /**
     * JSON stands for JavaScript Object Notation.
     * 
     * JSON is a text format for storing and transporting data
     * 
     * JSON is "self-describing" and easy to understand
     */

    // json is like string objects (KEY: VALUE) pair

    {
        let objects = {
            "key": "value",
            "key2": "value2",
        }
        console.log(objects.key);
        console.log(objects.key2);
    }

    // JSON is a lightweight data-interchange format.

    // JSON is language independent *****

    {
        /**
         * JavaScript has a built in function for converting JSON 
         * strings into JavaScript objects:
                JSON.parse()
         */


        /**
         * JavaScript also has a built in function for converting an object 
         * into a JSON string:
                JSON.stringify()
         */
    }

    {
        /** JSON Syntax rules : 
         
            * 1) Data is in name:value pair.
            * 2) data separated by commas (,)
            * 3) curly braces {} holds objects. 
            * 4) square bracets holds arrays.
        */

        // note:- we will create an object.

        // in json key must be string, written with double quotes;
        let obj = {
            "fname":"karan",
            "lname":"ghatol",
        }

        /**
        In JSON, values must be one of the following data types:
        * string - string values must written inside "" double quotes.
        * number
        * boolean
        * null
        * array
        * object
        * 
         */
    }
}