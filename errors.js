{
    // some errors may occur 
    {
        // syntax error
        let wrong = 2
        console.log(wrong); // error may occur
        let right = 2;
        console.log(right);
    }

    {
        // referance errors
        // console.log(y);   ---> 'y is not defined'
    }
    {
        // type errors
        let x = 10
        // x()  ----> 'x is not a function
    }
    {
        // let arr = new Array(-20)
        // console.log(arr); ---> invalid array length
    } 
    {
        // null and undefined errors
        let obj = null
        // console.log(boj.property);
    }
}