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
        map.set({ key: 10.2 }, [10, 20])
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

}