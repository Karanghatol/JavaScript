{
    {
        // Promise in javascript promise the code output/result

        // SYNTAX
        let promise = new Promise((resolve, reject) => {

        });
        console.log(promise);
    }

    {
        let promise = new Promise((resolve, reject) => {
            let i = 10;
            for (let m = 1; m <= i; m++) {
                if (m == 2) {
                    reject(m);
                    resolve(m)
                } else {
                    console.log(m);
                }
            }
        });
        console.log(promise);

        /** 
        1
        --- 2 is rejected
        3
        4
        5
        6
        7
        8
        9
        10
        Promise {<rejected>: 2}
         */
    }

    {
        let prom = new Promise(function (resolve, reject) {
            let i = 10;
            if (i != 10) {
                reject(i);
            } else {
                resolve(i);
            }
        });

        prom
            .then((resultok) => {
                console.log("result OK", resultok);
            }) // don't use ; semicolon
            .catch((error) => {
                console.error("result pending", error);
            }) // don't use ; semicolon
            .finally(() => {
                console.log("Promise settled -- ");
            });

        /**
         * Promise {<pending>}[[Prototype]]: Promise[[PromiseState]]: "pending"[[PromiseResult]]: undefined
            Promise {<rejected>: 10}
            Fulfilled: Operation completed successfully
            result OK 10
            Promise settled
            Promise settled -- 
         */
    }
}