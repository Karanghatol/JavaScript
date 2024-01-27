{
    // Both JSON and XML can be used to receive data from a web server.

    // JSON example : 
    {
        let obj = {
            "students": [
                {
                    "fname": "karan",
                    "lname": "ghatol",
                },
                {
                    "fname": "arjun",
                    "lname": "ghatol",
                },
            ]
        }

        {
            // xml example : 
            <students>
                <roll1>
                    <rollno>101</rollno>
                    <name>karan</name>
                </roll1>
                <roll2>
                    <rollno>102</rollno>
                    <name>ram</name>
                </roll2>
            </students>

        }
        // Both JSON and XML can be fetched with an XMLHttpRequest

        /**
         * For AJAX applications, JSON is faster and easier than XML:

            * Using XML --

            Fetch an XML document
            Use the XML DOM to loop through the document
            Extract values and store in variables

            * Using JSON --

            Fetch a JSON string
            JSON.Parse the JSON string

         */
    }
}