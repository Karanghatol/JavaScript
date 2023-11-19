// DOM (Document Object Model)

{
    {
        // getting the element by the Id of the element
        let id_ = document.getElementById("id");
        id_.style.color = "red"
        id_.style.fontSize = "30px"

    }
    // getting the element by the ClassName of the element

    /**
     * The getElementsByClassName method in JavaScript is used to retrieve a collection of HTML elements
     *  that have a specified class name.
     * Description:
        The getElementsByClassName() method returns a collection of elements with a specified class name(s).

        The getElementsByClassName() method returns an HTMLCollection.

        The getElementsByClassName() property is read-only.
     * 
     *  Here's an example:
     */
    {
        let ClassName_ = document.getElementsByClassName("class");
        if (ClassName_.length > 0) {
            ClassName_[0].innerHTML = "<b>class [0] = 1</b>"
            ClassName_[1].innerHTML = "<b>class [1] = 2</b>"
            ClassName_[2].innerHTML = "<b>class [2] = 3</b>"
        } else {
            console.log("class not found");
        }
    }
    /**
     * The getElementsByName method in JavaScript is used
     *  to retrieve a collection of HTML elements with a specified name attribute. 
     * It's important to note that this method is typically used with form elements, 
     * as the name attribute is commonly associated with form controls. 
     * 
     * Here's an example:
     */
    {
        function showname() {
            let name_ = document.getElementsByName('name')
            // check if it's available or not
            if (name_.length > 0) {
                for (var i = 0; i < name_.length; i++) {
                    alert("Username " + (i + 1) + ": " + name_[i].value);
                }
            } else {
                console.log("not available");
            }
        }
    }

    /**
     * The getElementsByTagName method in JavaScript is used to 
     * retrieve a live HTMLCollection of elements with the specified tag name. 
     * 
     * Here's an example:
     */
    {
        let tagname = document.getElementsByTagName('header')
        tagname[1].innerHTML = "this is tag name"
    }

    /**
     * innerHtml property is used to change the inner html of the tag or property
     */
    {
        let ihtml = document.getElementById('ihtml')
        ihtml.innerHTML = "innerHTML property"
    }
}