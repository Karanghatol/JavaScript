{
    /**
     * Constraint Validation DOM Methods
____Property________|_____________Description____________________________________
checkValidity()	    | Returns true if an input element contains valid data.
setCustomValidity()	|  Sets the validationMessage property of an input element.
     */

    let inpt = document.createElement('input');
    inpt.setAttribute('type', 'number');
    inpt.setAttribute('min', '20');
    inpt.style.width = '400px';
    document.body.appendChild(inpt);

    let btn = document.createElement('button');
    let text = document.createTextNode("Button");
    btn.appendChild(text);
    document.body.appendChild(btn);

    btn.addEventListener('click', () => {
        let obj = document.getElementsByTagName('input');
        if (!obj.checkValidity()) {
           alert(obj.validationMessage);
        } else {
            alert("input ok");
        }
    });
}