// Assignment code here


function generatePassword() {
    var userChoice = prompt
  
  
    let passLength = window.prompt("Enter letters from 8 - 128 Characters");
    console.log(passLength);
    if (passLength < 8) {
      alert('The password must be at least 8 characters');
      return null;
    }
  
  if (passLength > 128) {
      alert('The password must be less than or equal to 128 characters');
      return null;
    }
  
    let useUppercase = window.confirm("Uppercase");
    console.log(useUppercase);
  
    let useLowercase = window.confirm("Lowercase");
    console.log(useLowercase);
  
    let useNumbers = window.confirm("Numbers");
    console.log(useNumbers);
  
    let useSymbols = window.confirm("Symbols");
    console.log(useSymbols);
  
    const capitolLetters = "ABCDEFGHJIKLMNOPQRSTUVWXYZ"
    const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz"
    const number = "1234567890"
    const symbol = "!@#$%^&*()-=_+[]{}"
  
    let chosenCharacters = ""
  
  
    if (useUppercase) {
      chosenCharacters += capitolLetters
    };
  
    if (useLowercase) {
      chosenCharacters += lowerCaseLetters
    };
  
    if (useNumbers) {
      chosenCharacters += number
    };
  
    if (useSymbols) {
      chosenCharacters += symbol
    };
  
  
    let password = '';
  
    for (let i = 0; i < passLength; i++) { 
      console.log (i);
  
      let getRandomNumber = Math.floor(Math.random() * chosenCharacters.length);
  
      password += chosenCharacters.substring(getRandomNumber, getRandomNumber + 1)
    }
  
    return password
    document.getElementById('password').value = password;
  };
  
  
  
  // Get references to the #generate element
  var generateBtn = document.querySelector("#generate");
  
  
  
  //Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  