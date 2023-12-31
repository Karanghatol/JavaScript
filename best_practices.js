{
    // 1
    'use strict';

    // 2
    // Good
    const pi = 3.14;
    let count = 0;
    // Bad
    var x_ = 5;


    // 3
    // Good
    const app = {
        // properties and methods
    };
    // Bad
    window.myVariable = 'global';

    // 3
    // Good
    const totalItems = 100;
    function calculateTotalPrice(quantity, price) {
        // code
    }
    // Bad
    const x = 100;
    function calc(x, y) {
        // code
    }

    //4
    // Good
    const MAX_ITEMS = 100;
    if (items.length > MAX_ITEMS) {
        // handle overflow
    }
    // Bad
    if (items.length > 100) {
        // handle overflow
    }

    //5
    // Good
    const fullName = `${firstName} ${lastName}`;
    // Bad
    const fullName_ = firstName + ' ' + lastName;

    //6
    // Good
    fetchData()
        .then(data => {
            // handle data
        })
        .catch(error => {
            // handle error
        });
    // Bad
    const data = fetchDataSync(); // synchronous function

    // 7
    try {
        // code that might throw an error
    } catch (error) {
        // console.error('An error occurred:', error.message);
    }

    // 8
    // Bad
    const result = eval('2 + 2');
    console.log(result);

}