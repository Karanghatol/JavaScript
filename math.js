{
    /***
     * Math Constants
     */
    // PI
    console.log(Math.PI);

    // E Euler's number (e):
    console.log(Math.E);

    // Natural logarithm of 10:
    console.log(Math.LN10);

    // Natural logarithm of 2:
    console.log(Math.LN2);

    // sqrt of 1/2
    console.log(Math.SQRT1_2);

    // sqrt of 2
    console.log(Math.SQRT2);
}
{
    /**
     * Math Methods
     */
    let inf = Infinity
    console.log(inf);

    let num = 2
    console.log('SQRT of 2 : ' + Math.sqrt(num));
    console.log('Exponatiol of 2 : ' + Math.exp(num));
    console.log('log of 2 : ' + Math.log(num));
    console.log('log10 of 2 : ' + Math.log10(num));

    let num2 = 5.6
    console.log('Round : ' + Math.round(num2));
    console.log('floor : ' + Math.floor(num2));
    console.log('Ceil : ' + Math.ceil(num2)); // if num has more tha 0 after decimal add +1 -Decimal
    console.log('abs : ' + Math.abs(num2) + ' \nabs -1 : ' + Math.abs(-10)); // 5.6 exact value in positive +10
    console.log('Power of 2*2 : ' + Math.pow(num, 2));

    let sct = 10
    console.log('sin10 : ' + Math.sin(sct));
    console.log('cos10 : ' + Math.cos(sct));
    console.log('tan10 : ' + Math.tan(sct));
}

{
    // Min Max
    let n = 10
    let n2 = 20
    // max
    console.log('MAX ' + Math.max(n, n2));
    // min
    console.log('MIN ' + Math.min(n, n2));
}

{
    // random
    console.log(Math.random());
    console.log(Math.random() * 10 - 2);
}
