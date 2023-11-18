// JS BOM (Browser Object Model) :
/**
 * this event deals with browser events rather than document or it's conrtents
 * One key object within the BOM is the window object. 
 * The window object represents the browser window or tab, 
 * and it serves as the global object for JavaScript in the browser environment.
 */

{
    {
        /**
         * ~~~ some properties of Windows object:=>
         * : windows.innerWidth and windows.innerHeight
         * : windows.location - : Provides information about the current URL and allows for navigation.
         * : windows.document - References the Document Object Model (DOM) of the current page.
         */
    }
    {
        /**
         * ~~~ Methods:
         * : windows.alert() - Displays an alert dialog with a specified message and an OK button.
         * : windows.confirom() - Displays a dialog box with a specified message, along with OK and Cancel buttons.
         * : windows.prompt() - Displays a dialog box that prompts the user for input.
         */
    }
    {
        /**
         * ~~~ navigations:
         * : windows.open() - Opens a new browser window or tab.
         * : windows.close() -  Closes the current browser window or tab.
         */
    }
}
{
    // Here is an example demonstrating the use of the window object:
    
    window.alert("this is alert!")

    let prompt_ = window.prompt("string1 ", "string2")
    console.log("prompt : " + prompt_);

    document.getElementById("demo").innerHTML =
        "Browser inner window width: " + window.innerWidth + "px<br>" +
        "Browser inner window height: " + window.innerHeight + "px";
}