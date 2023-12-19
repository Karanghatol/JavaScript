{
    /**
     * In JavaScript, a Set is a built-in object that allows you to store unique values of any type, 
     * whether primitive values or object references. 
     * Unlike an array, which is ordered and allows duplicate elements, 
     * a Set is unordered and does not allow duplicates.
     */

    let set = new Set(['a', 'r', 'r', 'a', 'y'])
    console.log(set); // only output will be: Set(3) { 'a', 'r', 'y' }

    // we can add elements 
    let set2 = new Set()
    set2.add(1)
    set2.add(1) // won't be added
    set2.add('X')
    set2.add(true)
    set2.add({ key: 'karan' })
    console.log(set2);

    // check if element is already exist 
    console.log(set2.has('X'));

    // size of set
    console.log(set2.size);


    // iteration in sets using for of 
    console.log('\n');
    for (let val of set2) {
        console.log(val);
    }; console.log('\n');

    // deleting an element
    set2.delete(1); console.log(set2.has(1))

    console.log('\n');
    // consverting set into an array
    let set3 = new Set(['m', 2])
    let settoarr = [...set3]
    console.log(settoarr);
    // or by using Array.from 
    let settoarray = Array.from(set3)
    console.log(settoarray);

    {
        console.log('\n');
        let set1 = new Set([10, 20, 30, 'a'])
        let set2 = new Set(['a', 'b', 'c', 10])

        // union
        let union = new Set([...set1, ...set2])
        console.log(union);

        // Intersection
        const intersectionSet = new Set([...set1].filter(value => set2.has(value)));
        console.log(intersectionSet); // 10, 'a'

        // Difference
        const differenceSet = new Set([...set1].filter(value => !set2.has(value)));
        console.log(differenceSet);
        const differenceSet2 = new Set([...set2].filter(value => !set1.has(value)));
        console.log(differenceSet2);
    }
}