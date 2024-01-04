/**
 * Function Sequence
JavaScript functions are executed in the sequence they are called. 
Not in the sequence they are defined.
This example will end up displaying "Goodbye":
 */
{
    {
        /**
         * A callback is a function passed as an argument to another function
    
            *This technique allows a function to call another function
    
            *A callback function can run after another function has finished
         */
        function mydata(name) {
            document.getElementById('name').innerHTML = name;
        }

        function fun1() {
            mydata("karan");
        }
        function fun2() {
            mydata("ram");
        }

        fun1();
        fun2();
    }

    {

        function myDisplayer(some) {
            document.getElementById('some').innerHTML = some;
        }

        function myFirst() {
            myDisplayer("Hello");
        }

        function mySecond() {
            myDisplayer("Goodbye");
        }

        myFirst();
        mySecond();
    }

    /**
     * The HTML Code Here
     */
    {
        /*
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <p id="name">name:</p>
    <br />
    <p id="some">some:</p>
    <script src="../callback_async.js"></script>
  </body>
</html>

         */
    }
}