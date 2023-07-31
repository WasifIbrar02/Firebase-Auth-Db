// three container
// var
// let
// const
// var ab = "check"
// var cons = ab
// function one() {
// sconsole.log(conss)
// }
// one();

const password = document.getElementById('pass')
const email = document.getElementById('email')

const Name = document.getElementById('Name')
const Email = document.getElementById('Email')
const Country = document.getElementById('Country')
const Subject = document.getElementById('Subject')
const Message = document.getElementById('Your message')
// const Submit = document.getElementById('submit').value

function rcs() {
    if (Name.value == "" || Email.value == "" || Country.value == "" || Subject.value == "" || Message.value == "") {
        alert("All field all required")
    }
    else {
        alert("Message Sent Successfully")

    }



}

function validateEmail(email) {
    // Regular expression pattern for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function validatePassword(password) {
    // Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one digit
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordPattern.test(password);
}


function chek() {
    // console.log(email.value)
    // console.log(password.value)
    if (validateEmail(email.value)) {
        alert("Email is Valid")
    }
    else {
        alert("your email is  incorrect")
    }
    if (validatePassword(password.value)) {
        alert("Password is Valid")
    }
    else {
        alert("your Password is  incorrect")
    }
}




