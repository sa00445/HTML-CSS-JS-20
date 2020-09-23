let form = document.getElementById("form");
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let password2 = document.getElementById("password2");

// Show input error message
function showError(input, errorMessage) {
    const formControl = input.parentElement; //does the input value change to the "id" in each case?
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = errorMessage;
}

function showSucess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success'
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", function(e) {
    e.preventDefault();
    if (username.value === "") {
        showError(username, "Please enter username")
    } else {
        showSucess(username)
    }

    if (email.value === "") {
        showError(email, "Please enter email")
    } else if (!validateEmail(email.value)) {
        showError(email, "Email not valid")
    }
    else {
        showSucess(email)
    }

    if (password.value === "") {
        showError(password, "Please enter password")
    } else {
        showSucess(password)
    }

    if (password2.value === "") {
        showError(password2, "Please enter password2")
    } else {
        showSucess(password2)
    }
})