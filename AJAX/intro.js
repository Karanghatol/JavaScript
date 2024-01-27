let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', btnch);
function btnch() {
    // creating/instantiate and xhr object
    const xhr = new XMLHttpRequest();
    // true means asynchronous
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
    // optional
    xhr.onprogress = () => {
        alert("on progress");
    }

    xhr.onreadystatechange = function () {
        console.log('state is : ', xhr.readyState);
    }

    // do something when response is ready.
    xhr.onload = function () {
        // ok response code = 200 will be checked here
        if (this.status === 200) {
            console.log(this.responseText);
        } else {
            console.log("some error occurred")
        }
    }
    // sending the request
    xhr.send();

    console.log("we are done");
}