// for loop
{
    let x_ = 10;
    for (let i_ = 0; i_ <= x_; i_++) {
        // console.log(i_);
    }
}
// nested for loop
{
    let x = 5
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < x; j++) {
            // console.log(i, j);
        }
    }
}

// while loop
{
    let y = 8
    while (y < 15) {
        // console.log(y);
        y++
    }
}

// do while loop
{
    let y = 8
   do {
        // console.log(y);
        y++
   } while (y < 15)
}

// for in loop
{
    let listi = {name: "karan", age: 20}
    for (const key in listi) {
        // console.log(key, listi[key]);
    }
}

// for of loop
{
    let a = [1,2,0,8,9]
    for(let k of a){
        console.log(" " + k);
    }
}