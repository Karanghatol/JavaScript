// In JavaScript, the const keyword is used to declare a variable that cannot be reassigned.
// When it comes to arrays declared with const, 
// it's important to understand that the const declaration applies to the reference to the array, 
// not the contents of the array. This means that while you cannot reassign the variable to a new array, 
// you can still modify the elements of the array.

// Here's an example:

// Declaring a constant array
const myArray1 = [1, 2, 3];

// Attempting to reassign the array will result in an error
// Uncommenting the line below will cause an error
// myArray1 = [4, 5, 6];

// However, you can modify the contents of the array
myArray1.push(4);
console.log(myArray1);  // Output: [1, 2, 3, 4]
// In the example above, trying to reassign myArray1 to a new array would result in an error.
// However, you can still modify the array by using methods like push, pop, splice, etc., 
// because the const declaration only prevents the variable itself from being reassigned.


// If you want to ensure that neither the array reference nor its contents can be changed, 
// you can use the Object.freeze() method:

const myArray = [1, 2, 3];

// Freeze the array to make it immutable
Object.freeze(myArray);

// Attempting to modify the array will result in an error
// Uncommenting the line below will cause an error
// myArray.push(4);
// Keep in mind that Object.freeze() provides shallow immutability,
// meaning it prevents modifications to the top - level array and its direct elements.
// However, if the array contains objects or arrays as elements,
// modifications to those nested objects or arrays are still possible.For deep immutability,
// you might want to use libraries like Immutable.js or write custom functions to deeply freeze objects.