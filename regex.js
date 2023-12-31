{
    /**
     * Regular expressions, often abbreviated as regex or regexp, 
     * are powerful tools for pattern matching and manipulation of strings in JavaScript. 
     * In JavaScript, the RegExp object is used to create and manipulate regular expressions. 
     * Regular expressions consist of patterns that are used to match character combinations in strings.
     */


    /**
     * 
    Character Classes:
    []: Matches any single character within the brackets. For example, [aeiou] matches any vowel.
    
    Metacharacters:
    .(dot): Matches any single character except a newline.
    ^: Anchors the regex at the start of the string.
    $: Anchors the regex at the end of the string.
    *: Matches zero or more occurrences of the preceding character or group.
    +: Matches one or more occurrences of the preceding character or group.
    ?: Matches zero or one occurrence of the preceding character or group.
    |: Acts as an OR operator, matching either the pattern on the left or the pattern on the right.
    
    Quantifiers:
    {n}: Matches exactly n occurrences of the preceding character or group.
    {n,}: Matches n or more occurrences of the preceding character or group.
    {n,m}: Matches between n and m occurrences of the preceding character or group.
    
     */
    {

        {
            let regex = new RegExp("pattern");
            console.log(regex);

            let regex2 = /hello pattern/
            console.log(regex2);
        }

        {
            // matching vowels
            let vow = /[aeiou]/
            console.log(vow.test('apple'));  // true
            console.log(vow.test('india'));  // true
            console.log(vow.test('Los Angales'));  // true
            console.log(vow.test('BCDF')); //false: no [aeiou] included inside th
        }

        {
            // test()
            console.log("\n" + "ab*c");
            let regex = /ab*c/;
            console.log(regex.test("ac"));  // Output: true
            console.log(regex.test("abc")); // Output: true
            console.log(regex.test("abbbc")); // Output: true
            console.log(regex.test('abd'));
        }

        // case sensetive
        {
            console.log("\n" + "casesensitive");
            // let regex = /'karan'/i
            let regex = new RegExp('karan', 'i')
            console.log(regex);
        }

        // matching multiple characters 
        {
            console.log("\n" + "matching multiple characters");
            let regex = new RegExp('hello')
            console.log(regex.test('hello karan')); // true : there is hello in this string
        }

        {
            // + : Matches 1 or more occurrences of the preceding character.
            console.log("\n" + "using +");
            let plus = /bo+k/
            let result = plus.test("book")
            console.log(result);
            result = plus.test("bok")
            console.log(result);
        }

        {
            // *: Matches 0 or more occurrences of the preceding character.
            console.log("\n" + "using *");
            let plus = /bo*k/
            let result = plus.test("book")
            console.log(result);
            result = plus.test("bok")
            console.log(result);
        }

        {
            // ?: Matches 0 or 1 occurrence of the preceding character.
            console.log("\n" + "using ?");
            let plus = /bo?k/
            let result = plus.test("book")
            console.log(result);
            result = plus.test("bok")
            console.log(result);
        }

        {
            // starting of string
            console.log("\n" + "using ^");
            let str = /^hello/
            console.log(str.test('world hello'));
            console.log(str.test('hello world'));
        }

        {
            // .: Matches any single character (except for a newline).
            console.log("\n" + "using .(dot)");
            let str = /hel.o/
            console.log(str.test('hello')); // true
            console.log(str.test('helno')); // true
            console.log(str.test('helo')); // false
        }
    }


    {
        /**
         * Groups and capturing
         */
        console.log("\n\n" + "Groups and capturing\n");


        {
            // (): Creates a group of characters.
            console.log("\n" + "group of characters");
            let regex = /(Group)+/
            console.log(regex.test('Group')); // true
            console.log(regex.test('GroupGafaf ')); // true
            console.log(regex.test('Grou')); // false: incomplete
            console.log(regex.test('Group-karanghatol')); // true
        }

        {
            // () with .exec() or .match() captures the matched part.
            {
                console.log("\n exce()");
                // Example: Matching a date with groups for day, month, and year
                let dateRegex = /(\d{2})-(\d{2})-(\d{4})/;
                let dateString = "28-12-2023";
                let matchResult = dateRegex.exec(dateString);
                console.log(matchResult);
            }
            {
                console.log("\n match()");
                let variable = /(d{2})-(d{2})-(d{4})/
                let datestr = "12-31-2022"
                let matching = datestr.match(variable)
                console.log(matching);
            }
        }
    }
}