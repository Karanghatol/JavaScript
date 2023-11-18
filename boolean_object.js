// In JavaScript, the Boolean object is a wrapper object that represents a Boolean value(either true or false).
// creating boolean object 
{
    let bool = new Boolean(true); // or false
    console.log(typeof(bool));
    console.log(bool.valueOf()); 

    // Keep in mind that even though boolObject looks like a Boolean, it is an object.

    // primitive 
    let bool2 = false;

    // object 
    let bool3 = new Boolean(true)
    if (bool2) {
        console.log("primitive");
    } if (bool3) {
        console.log("object ::");
    }

    {
        let bool = "string";
        let bool2 = new Boolean(bool)
        console.log(bool2);
    }

}