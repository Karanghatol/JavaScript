// string in js
/**
 * string alwayes written inside '' or "" quotes
 */
{
    let str = "this is string"
    let str2 = 'this is string too'
    // console.log(str + " \n" + str2);
    /**
     * here are some string methods
     */
    /**
     * length: Returns the length of a string.
     */
    console.log(str.length)
    /**
     * charAt(index): Returns the character at the specified index in a string.
     */
    console.log(str.charAt(1));
    /**
     * concat(str1, str2, ..., strN): Concatenates two or more strings.
     */
    let concated = str.concat(" ", str2)
    console.log(concated);
    /**
     * indexOf(searchValue, startIndex): Returns the index of the first occurrence of a specified value in a string.
     *  Returns -1 if the value is not found.
     */
    console.log(str2.indexOf('too'));
    /**
     * substring(startIndex, endIndex): Returns a subset of a string based on specified indices.
     */
    console.log(str2.substring(14, 16));
    /**
     * toUpperCase() and toLowerCase(): Converts a string to uppercase or lowercase.
     */
    console.log(str.toUpperCase());
    console.log(str.toLowerCase());
    /**
     * replace(searchValue, replaceValue): Replaces a specified value with another value in a string.
     */
    console.log(str2.replace('string', 'second string'));
    /**
     * split(separator): Splits a string into an array of substrings based on a specified separator.
     */
    let split_ = str2.split(" ")
    console.log(split_);
    /**
     * trim(): Removes whitespace from both ends of a string.
     */
    console.log(str2.trim());
    /**
     * startsWith(searchString) and endsWith(searchString): 
     * Checks if a string starts or ends with a specified substring.
     */
    console.log(str.startsWith("this")); // true
    console.log(str2.endsWith("too")); // true
}