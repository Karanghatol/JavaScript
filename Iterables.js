{
    // it use the for of loop
    // used by Strings, Maps, Arrays, Generators, Sets

    let str = "string"
    for (let iterator of str) {
        //  iterator 
        console.log('- ' + iterator);
    }
console.log('\n');

    let arr = [1, 2, 3]
    for (let a of arr) {
        console.log('- ' + a * 2);
    }
}
console.log('\n');
{
    let array = ['apple', 'bunanana', 'pineapple', 'orange']
    function indexIterator(values) {
        let nextindex = 0;
        return {
            next: function () {
                if (nextindex < values.length) {
                    return {
                        value: values[nextindex++],
                        done: false
                    }
                } else {
                    return {
                        done: true
                    }
                }
            }
        }
    }

    let array2 = indexIterator(array)

    // console.log(array2.next().value);
    // console.log(array2.next().value);
    // console.log(array2.next().value);
    // console.log(array2.next().value + '\n');

    console.log(array2.next());
    console.log(array2.next());
    console.log(array2.next());
    console.log(array2.next());
    console.log(array2.next()); // done: true


}