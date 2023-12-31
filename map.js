{
    /** In JavaScript, a Map is a built -in object that allows you to store key - value pairs, 
     * where both the keys and the values can be of any data type, including objects and primitive values.
     * Maps provide a more flexible and versatile way to handle data structures compared to plain objects.
     * Here's an overview of Maps in JavaScript, along with examples 
    */

    var map = new Map()
    {
        // setting values with key
        let x = 'variable X'
        map.set(1, 'one')
        map.set('two', 2)
        map.set(true, false)
        map.set('variable', x)  // varianble x
        map.set({key: 10.2 }, [10, 20])
        console.log(map);
    }
    console.log('\n');
    {
        // get : return key's value
        console.log(map.get(1));
        console.log(map.get({key: 10.2}));
    }
    console.log('\n');
    {
        // has : return true (if exists), else false
        console.log(map.has(1));
    }
    console.log('\n');
    {
        // delete : delete the item
        console.log(map.delete('two') + ' : deleting two');
    }
    console.log('\n');
    {
        // iterating : iterating using key value in for of loop
        for (let [key , value] of map) {
        console.log(`key: ${key} value: ${value}`);
        }
    }
    console.log('\n');

    console.log(map);

    let mymap = new Map()
    mymap.set(1, "karan")
    mymap.set(2, "arjun")
    mymap.set(3, "krishna")

    mymap.get(1)
    mymap.delete(2)
    mymap.has(3)

    console.log(mymap.size); // 2 because we deleted 2nd element

    {
        /**
        new Map()	Creates a new Map object
        set()	    Sets the value for a key in a Map
        get()	    Gets the value for a key in a Map
        clear()	    Removes all the elements from a Map
        delete()	Removes a Map element specified by a key
        has()	    Returns true if a key exists in a Map
        forEach()	Invokes a callback for each key/value pair in a Map
        entries()	Returns an iterator object with the [key, value] pairs in a Map
        keys()	    Returns an iterator object with the keys in a Map
        values()	Returns an iterator object of the values in a Map
            
        size	    Returns the number of Map elements
         */
    }

}
