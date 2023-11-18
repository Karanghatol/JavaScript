// In JavaScript, the history object is part of the Browser Object Model(BOM), 
// and it provides an interface for interacting with the browser's session history. 
// The session history is a record of the pages visited by the user in the current browser window or tab. 
// The history object allows you to navigate back and forth through this history.

// Here are some properties and methods of the history object:
{
    {
        // Properties:

        // history.length: Returns the number of entries in the session history.
    }
    {
        //     Methods:

        // history.back(): Moves the browser back one page in the session history.
        // history.forward(): Moves the browser forward one page in the session history.
        // history.go(delta): Moves the browser forward or backward by the specified number of pages.
        // Positive values go forward, and negative values go backward.
    }

    {
        function goback() {
            history.back()
        }

        function gofor() {
            history.forward()
        }
        function pageno() {
            history.go(1)
        }
        // goback()
        gofor()
        pageno()
    }
}