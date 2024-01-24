let i = 0;

function timedCount() {
    i++;
    postMessage(i);
    setTimeout("timedCount()", 500);
}

timedCount();

/**
 * postMessage() method - which is used to post a message back to the HTML page.

Note: Normally web workers are not used for such simple scripts, 
but for more CPU intensive tasks.
 */