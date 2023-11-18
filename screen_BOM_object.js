/**
 * The screen object in the Browser Object Model (BOM) provides information about the user's screen or display. It includes properties that give details about the user's screen dimensions, color depth, and other display-related information.

Here are some commonly used properties of the screen object:

 : screen.width: Returns the width of the user's screen in pixels.
 : screen.height: Returns the height of the user's screen in pixels.
 : screen.availWidth: Returns the available width of the user's screen in pixels (excluding taskbars, etc.).
 : screen.availHeight: Returns the available height of the user's screen in pixels (excluding taskbars, etc.).
 : screen.colorDepth: Returns the color depth of the user's screen (number of bits per pixel).
 : screen.pixelDepth: Similar to colorDepth, returns the color depth of the user's screen.
 */
{
    document.getElementById("screenWidth").textContent = screen.width;
    document.getElementById("screenHeight").textContent = screen.height;
    document.getElementById("availWidth").textContent = screen.availWidth;
    document.getElementById("availHeight").textContent = screen.availHeight;
    document.getElementById("colorDepth").textContent = screen.colorDepth;
}