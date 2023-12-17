{
    // sorting arrayes
    let arr = Array(1, 5, 3, 4)
    let arr2 = Array('a', 'z', 'c', 'd')

    arr2.sort()
    console.log(arr2)

    arr.reverse()
    console.log(arr)

    // we can use arrow  functions to sort the array
    console.log(arr.slice().sort((x, y) => x - y)) //dierct sort for assenfing and decending (desending: slice())

    // Associative arrry Sorting 
    // key
    let arr3 = { 1: 'Z', 4: 'Y', 3: 'X' }
    let entities = Object.entries(arr3)
    entities.sort((a, b) => a[0].localeCompare(b[0]))
    let sorted = Object.fromEntries(entities)
    console.log(sorted)
    // value
    let arr4 = { 1: 'C', 4: 'B', 3: 'A' }
    let entities2 = Object.entries(arr4)
    entities2.sort((a, b) => a[0] - b[0])
    let sorted_val = Object.fromEntries(entities2)
    console.log(sorted_val)

}