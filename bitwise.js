{
    /**
     * 
Bitwise operations in JavaScript involve manipulating individual bits of binary representations of integers. 
JavaScript uses 32-bit signed integers for bitwise operations.
     */

    // and &
    {
        let num = 5 & 3 // Result: 1 (binary: 101 & 011 = 001)
        console.log(num);
    }

    // or |
    {
        let num = 5 | 3  // Result: 7 (binary: 101 | 011 = 111)
        console.log(num);
    }

    // xor ^
    {
        let num = 5 ^ 3 // Result: 6 (binary: 101 ^ 011 = 110)
        console.log(num);
    }

    // not ~
    {
        // The NOT operator (~) flips each bit of the operand. 
        // It turns 1s into 0s and 0s into 1s. Keep in mind that the result is a 32-bit signed integer, 
        // so the representation is two's complement.
        let num = ~-20
        console.log(num);
    }

    // left shift <<
    {
        let num = 10 << 3 // 
        console.log(num);  // 101 10
    }

    // right shift >>
    {
        let num = 3 >> 10 // 
        console.log(num);  // 101 10
    }

    // zero fill right shift >>>
    {
        let num = -5 >>> 1999
        console.log(num);
    }
}