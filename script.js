// Array of special characters to be included in password
let specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
let numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let choiceArr = [];
let characterLength = 10;

// Function to prompt user for password options
function getPasswordOptions() {
  choiceArr = [];

  characterLength = parseInt(prompt("How many characters do you want your password to be? (must between 10-64 characters"));

  if (isNaN(characterLength) || characterLength < 10 || characterLength > 64) {
    alert("Character length has to be between 10 - 64 digits. please try again")
    return false;
    
  }

  if (confirm("Would you like lowercase letters included in your password?")){
    choiceArr = choiceArr.concat(lowerCasedCharacters);  
  }
  if (confirm("Would you like uppercase letters included in your password?")){
    choiceArr = choiceArr.concat(upperCasedCharacters);  
  }
  if (confirm("Would you like special characters included in your password?")){
    choiceArr = choiceArr.concat(specialCharacters);  
  }
  if (confirm("Would you like numbers included in your password?")){
    choiceArr = choiceArr.concat(numericCharacters);  
  }

  return true;  
  
}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * choiceArr.length)

  return true;

}

// Function to generate password with user input
function generatePassword() {
  let password = "";
  for (let i = 0; i < characterLength; i++) {
    randomIndex = Math.floor(Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
    
  }

  return password;

}

// Get references to the #generate element
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let corretAns = getPasswordOptions();
  let passwordText = document.querySelector('#password');
  if (corretAns) {
      let newPassword = generatePassword();
      passwordText.value = newPassword;
  }else{
    passwordText.value = "";
  }

}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
