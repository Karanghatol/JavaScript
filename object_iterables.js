{
    for (const x of "Hello World!") {
        console.log(x);
    }
    /**
     * output
     * 
    H
    e
    l
    l
    o
    
    W
    o
    r
    l
    d
    !
     */

    {
        // array
        for (let x of [1, 'a', true, { key: "value" }]) {
            console.log(x);
        }
    }
}