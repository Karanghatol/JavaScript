{
    for (const x of "Hello World!") {
        // console.log(x);
    }

    {
        function addTen() {
            let n = 0
            return {
                get next() {
                    n += 10
                    return {
                        val: n,
                        done: false
                    }
                }
            }
        }
        // create an object of addTen
        let obj = addTen()
        console.log(obj.next.val); // 10
        console.log(obj.next.val); // 20
        console.log(obj.next.val); // 30
        console.log(obj.next.val); // 40
        console.log(obj.next.val); // 50
        // n will increase by +10 every time it called
    }

    {
        // creataing an Object
        Mynum = {}

        // make it iterable
        Mynum[Symbol.iterator] = function () {
            let n = 0;
            done = false;
            return {
                get next() {
                    n += 10
                    if(n === 100) {
                        done = true
                    }
                    return {
                        vlaue:n,
                        done: done
                    }
                }
            }
        }
        
        let text = ""
        for (let num of Mynum) {
            text += num + '\n'
        }
        console.log(text);
    }
}