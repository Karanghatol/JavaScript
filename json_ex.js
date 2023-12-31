{
    /**
     * json file in js
     * 
     * JSON is a lightweight data interchange format that is easy for humans to read and write, 
     * and easy for machines to parse and generate. In JavaScript, 
     * you often work with JSON when exchanging data between a web server and a web 
     application or when storing configuration settings.
    */

    {
        /**
            json file is stored or saved by extension .json

            * each element separated by comma (,)

            * every key is written in "" (double qout)
        */

        /**
         * here is the file of json : json_ex.json
         */
    }

    {
        // in javascript we can use the json like syntax by using objects

        // JavaScript object
        const person = {
            name: "John Doe",
            age: 30,
            city: "New York",
            isStudent: false,
            courses: ["Math", "Physics", "Computer Science"]
        };
        console.log(person.courses);
    }

    {
        // converting js object into json

        const person = {
            name: "Karan ghatol",
            age: 20,
            city: "Chh. Sambhajinagar",
            isStudent: true,
            courses: ["Math", "Physics", "Computer Science"]
        };
        /**
         * here is a method is used to coonvert the js object into json 
         * ------->  stringify()  <------
         */

        let intojson = JSON.stringify(person)
        console.log(intojson);

        // converting json file into js object

        /**
         * here is a method name parse(). used to convert  json to js
         */
        let intojs = JSON.parse(intojson)
        console.log(intojs);
    }

    {
        // Example using fetch API
        fetch('https://karan.jsonAPIex.com/data')
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error('Error:', error));
    }

    {
        try {
            const personObject = JSON.parse(personJSON);
            console.log(personObject);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }

    }
}