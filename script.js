// User variables
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Password variable values
specialCharList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateBtn = document.querySelector("#generate");

// Prompts for the criteria of password
function generatePassword () {
  // logic for length of password
  var userInput = prompt ("Enter the number of characters you want for your password. It must be between 8 and 128 characters.");

  var confirmLength = parseInt(userInput)

  if (isNaN(confirmLength)) {
    alert ("Please enter a number!")
    return
  }

  if (confirmLength < 8 || confirmLength >128) {
    alert ("Password length must be between 8 and 128 characters")
    return
  }

  var confirmNumber = confirm ("Do you want numbers in your password?");
  var confirmCharacter = confirm ("Do you want special characters in your password?");
  var confirmUppercase = confirm ("Do you want uppercase characters in your password?");
  var confirmLowercase = confirm ("Do you want lowercase characteres in your password?");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
