{
/**
 * With the bind() method, an object can borrow a method from another object.
 */

    let obj1 = {
        fname: 'karan',
        lname: 'ghatol',
        sey: function() {
            return this.fname + " " + this.lname;
        },
    };

    let obj2 = {
        fname: 'aaa',
        lname: 'zzz',
    }

    let sey = obj1.sey.bind(obj2)
    console.log(sey()); //  aaa zzz

    const person = {
        firstName: "kk",
        lastName: "gg",
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
    }

    const member = {
        firstName: "thote",
        lastName: "nilesh",
    }

    let fullName = person.fullName.bind(member);
    console.log(fullName())

}