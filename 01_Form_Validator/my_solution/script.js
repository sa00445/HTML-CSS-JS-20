function myfunction(event) {
    event.preventDefault();
    if(document.getElementsByClassName("userInput")[0].innerText.length > 0) {
        // document.getElementsByClassName("userInput")[0].innerText = "";
        if (document.getElementById("username").value.length < 3) {
            let error = document.createElement("p");
            error.innerText = "Error";
            let place = document.getElementsByClassName("userInput")[0];
            place.appendChild(document.createTextNode('Username must be atleast 3 characters'));
            console.log(place);
            let inputField = document.getElementById("username");
            inputField.classList.add("errorField")
            place.classList.add("error")
            return false
        } else {
            return true
        }
    } else {
        if (document.getElementById("username").value.length < 3) {
            let error = document.createElement("p");
            error.innerText = "Error";
            let place = document.getElementsByClassName("userInput")[0];
            place.appendChild(document.createTextNode('Username must be atleast 3 characters'));
            console.log(place);
            let inputField = document.getElementById("username");
            inputField.classList.add("errorField")
            place.classList.add("error")
            return false
        } else {
            return true
        } 
    }
}
