"use strict";
// This fulfills requirement 3.2.6 B)

// FORM INPUT VALIDATION

window.addEventListener("load", function () {
     document.getElementById("subButton").onclick = runSubmit;
     document.getElementById("name").oninput = validateName;
     document.getElementById("email").oninput = validateEmail;
     document.getElementById("message").oninput = validateMessage;
});

function runSubmit() {
     validateName();
     validateEmail();
     validateEmailPattern()
     validateMessage();
}

function validateName() {
     var name = document.getElementById("name");
     if (name.validity.valueMissing) {
          name.setCustomValidity("Please a cool name");
     } else {
          name.setCustomValidity("");
     }
}

function validateEmail() {
     var email = document.getElementById("email");
     if (email.validity.valueMissing) {
          email.setCustomValidity("Enter an email");
     } else {
          email.setCustomValidity("");
     }
}

function validateEmailPattern() {
     var email = document.getElementById("email");
     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
     if (email.value.match(mailformat)) {
          email.setCustomValidity("");
     }
     else {
          email.setCustomValidity("Incorrect email");
     }
}

function validateMessage() {
     var message = document.getElementById("message");
     if (message.validity.valueMissing) {
          message.setCustomValidity("Write something here");
     } else {
          message.setCustomValidity("");
     }
}