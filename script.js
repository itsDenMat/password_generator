// User variables
var confirmLength;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var completePassword = [];

// Password variable values
specialCharList = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]
numberList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
upperCaseList = ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"];
lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

// Prompts for the criteria of password
function generatePassword () {

  while (true) {
    var userInput = prompt ("Enter the number of characters you want for your password. It must be between 8 and 128 characters.");
    
    if (userInput === null) {
      return
    }

    var confirmLength = parseInt(userInput)

    if (isNaN(confirmLength)) {
      alert ("Please enter a number!")
    } else if (confirmLength < 8 || confirmLength >128) {
      alert ("Invalid password length! Password length must be between 18 and 128 characters.")
    } else {
      break
    }
  }

  var confirmNumber = confirm ("Do you want numbers in your password?");
  var confirmCharacter = confirm ("Do you want special characters in your password?");
  var confirmUppercase = confirm ("Do you want uppercase characters in your password?");
  var confirmLowercase = confirm ("Do you want lowercase characteres in your password?");
  

  if (confirmNumber) {
    completePassword.push(numberList)
  }

  if (confirmCharacter) {
    completePassword.push(specialCharList)
  }

  if (confirmUppercase) {
    completePassword.push(upperCaseList)
  }

  if (confirmLowercase) {
    completePassword.push(lowerCaseList)
  }

  if (completePassword == 0) {
    alert ("You have to select at least one criteria.")
  } 

  var generatePassword = ""

  for (var i = 0; i < confirmLength; i++) {
    var randomList = getRandomItem(completePassword)
    var randomChar = getRandomItem(randomList)
    generatePassword += randomChar
  }

  return generatePassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
