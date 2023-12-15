/**
 * 
 * 
    charAt(index):
    Returns the character at the specified index in a string.
    
    charCodeAt(index):/\/\/\/\/\\/\/\/\/\
    Returns the Unicode value of the character at the specified index.
    
    concat(str1, str2, ../.):\/\/\/\/\\/\/\/\/\
    Combines two or more strings and returns a new string.
    
    indexOf(searchValue, startIndex):/\/\/\/\/\\/\/\/\/\
    Returns the index of the first occurrence of a specified value in a string. If not found, returns -1.
    
    lastIndexOf(searchValue, startIndex):/\/\/\/\/\\/\/\/\/\
    Returns the index of the last occurrence of a specified value in a string. If not found, returns -1.
    
    slice(startIndex, endIndex):/\/\/\/\/\\/\/\/\/\
    Extracts a section of a string and returns a new string without modifying the original string.
    
    substring(startIndex, endIndex):/\/\/\/\/\\/\/\/\/\
    Similar to slice, but doesn't support negative indices.
    
    substr(startIndex, length):/\/\/\/\/\\/\/\/\/\
    Returns the characters in a string beginning at the specified location through the specified number of characters.
    
    toUpperCase()/:\/\/\/\/\\/\/\/\/\
    Converts all the characters in a string to uppercase.
    
    toLowerCase()/:\/\/\/\/\\/\/\/\/\
    Converts all the characters in a string to lowercase.
    
    trim()/:\/\/\/\/\\/\/\/\/\
    Removes white spaces from both ends of a string.
    
    replace(searchValue, replaceValue):/\/\/\/\/\\/\/\/\/\
    Searches a string for a specified value and replaces the first occurrence with another value.
    
    replaceAll(searchValue, replaceValue):/\/\/\/\/\\/\/\/\/\
    Replaces all occurrences of a specified value in a string.
    
    match(regexp):/\/\/\/\/\\/\/\/\/\
    Searches a string for a match against a regular expression and returns the matched results.
    
    search(regexp):/\/\/\/\/\\/\/\/\/\
    Searches a string for a specified value or regular expression and returns the index of the first match.
    
    split(separator, limit):/\/\/\/\/\\/\/\/\/\
    Splits a string into an array of substrings based on a specified separator.
    
    startsWith(searchString, position):/\/\/\/\/\\/\/\/\/\
    Checks if a string starts with a specified substring.
    
    endsWith(searchString, length):/\/\/\/\/\\/\/\/\/\
    Checks if a string ends with a specified substring.
    
    includes(searchString, position):/\/\/\/\/\\/\/\/\/\
    Checks if a string contains a specified substring.
    
    localeCompare(compareString):/\/\/\/\/\\/\/\/\/\
    Compares two strings in the current locale.
     * 
     */

{
   let str1 = "String one one"
   console.log(str1.charAt(2))
   console.log(str1.charCodeAt(9))
   console.log(str1.concat(", string 2", ", string 3"))
   console.log(str1.indexOf("s"));
   console.log(str1.lastIndexOf("i"))
   console.log(str1.slice(0, -4))
   console.log(str1.substring(0, 6))
   console.log(str1.substr(0, 6))
   console.log(str1.toUpperCase())
   console.log(str1.toLowerCase())
   console.log(str1.trim())
   console.log(str1.replace("one", "Char[]"))
   console.log(str1.replaceAll("one", "Char[]"))
   console.log(str1.match())
   console.log(str1.search("one"))
   console.log(str1.split('o'))
   console.log(str1.startsWith('Str'))
   console.log(str1.endsWith('one'))
   console.log(str1.includes("one"))
   let str2 = "two"
   let str3 = "three"
   console.log(str2.localeCompare(str3));
}