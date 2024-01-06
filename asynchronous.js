/**
 * asynchronous js is the program that takes time to process the code 
 * 
 * like fetching files, network etc.
 * 
 */
{
    {
        // setting 1.9 sec to execute the program
        setTimeout(() => {
            for (let i = 1; i <= 82; i++) {
                console.log(i);
            };
        }, 197);

        setTimeout(() => {
            console.log("done printing");
        }, 198);
    }

    /**
     * 
     * In JavaScript, asynchronous programming is a way to handle operations that take time to complete, 
     * such as reading a file, making a network request, or executing a time-consuming task, 
     * without blocking the main thread. Asynchronous operations allow the program to 
     * continue executing other tasks while waiting for the asynchronous task to finish.
     *
    */

    {
        function Display_name(name) {
            document.getElementById("demo").innerHTML = name;
        }

        function Add(fname, lname, myCallback) {
            let Full_name = fname + " " + lname;
            myCallback(Full_name);
        }

        Add('karan', 'ghatol', Display_name);  
        // we have Full_name in myCallback method we are passing Display_name function as a parameter
        // so value of name (in Display_name() function) is = Full_name now  
    }
}