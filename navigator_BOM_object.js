/**
 * No.	Property	Description
 * 1 : appName->	returns the name
 * 2 : appVersion->	returns the version
 * 3 : appCodeName->	returns the code name
 * 4 : cookieEnabled->	returns true if cookie is enabled otherwise false
 * 5 : userAgent->	returns the user agent
 * 6 : language->	returns the language. It is supported in Netscape and Firefox only.
 * 7 : userLanguage->	returns the user language. It is supported in IE only.
 * 8 : plugins->	returns the plugins. It is supported in Netscape and Firefox only.
 * 9 : systemLanguage->	returns the system language. It is supported in IE only.
 * 10 : mimeTypes[]-> returns the array of mime type. It is supported in Netscape and Firefox only.
 * 11 : platform->	returns the platform e.g. nWin32.
 * 12 : online->	returns true if browser is online otherwise false.
 */
{
    document.getElementById("userAgent").textContent = navigator.userAgent;
    document.getElementById("platform").textContent = navigator.platform;
    document.getElementById("language").textContent = navigator.language;
    document.getElementById("cookiesEnabled").textContent = navigator.cookieEnabled ? "Yes" : "No";
    document.getElementById("onlineStatus").textContent = navigator.onLine ? "Online" : "Offline";

}