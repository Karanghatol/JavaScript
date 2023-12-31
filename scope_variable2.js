{
    // Lexical Scope
    // Functions can be nested, and the inner function has access to the variables of its outer(enclosing) function. This is known as lexical or static scope.
    {
        function outerFunction() {
            var outerVar = "I'm outer";

            function innerFunction() {
                console.log(outerVar); // Accessible
            }

            innerFunction();
        }

        outerFunction();
    }

    {
        // scope chain
        var globalVar = "I'm global";

        function outerFunction() {
            var outerVar = "I'm outer";

            function innerFunction() {
                console.log(globalVar, outerVar); // Accessible
            }

            innerFunction();
        }

        outerFunction();


    }
}