{
    let arr = new Array(1, 2, 3, 4)
    console.log(arr);

    let arr2 = [' a', ' b', ' c']

    console.log(arr.concat(arr2)) // to concat two arrays
    console.log(arr.length);
    console.log(arr.toString());
    arr.pop()
    console.log(arr);
    arr.push(0)
    console.log(arr);
    arr2.shift() // removes the first element
    console.log(arr2);
    arr2.unshift('a')
    console.log(arr2);
    let join_ = arr.join(', ') // adds the ',' 
    console.log(join_);
    let arr3 = {k: 'k', m: 'm'}
    delete arr3.k
    console.log(arr3);
    // Removing an element from the array by index
    const indexToRemove = 2;
    arr.splice(indexToRemove, 1);
    console.log(arr);
    let arr4 = [['x','y'],[9,8]]
    console.log(arr4.flat());
}