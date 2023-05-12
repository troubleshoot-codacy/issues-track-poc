// This code is vulnerable to Cross-Site Scripting (XSS) attack

var userInput = "<script>alert('XSS Attack!');</script>";
var message = "Welcome, " + userInput;

document.getElementById("output").innerHTML = message;
