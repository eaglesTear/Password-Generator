/* 
  ******************************
  PASSWORD GENERATOR: CHARACTERS
  ******************************

  My take on a simple password generator has the potential characters that may be generated held in nested arrays. It is not 100% random: the first 4 characters in a password of any length are always a number, lowercase letter, uppercase letter and symbol (see below as to why). The main characters array object is initiated below, and its sub-arrays follow.
*/

const characters = new Array();

characters[0] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
characters[1] = ["a", "b" , "c", "d" , "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
characters[2] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
characters[3] = ["~", "'", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/"];

// GLOBALS: Get the app button elements ready for functions to run on them
 
const generateBtn = document.getElementById("generate");
const copyBtn = document.querySelector(".copy-btn");

/* 
  *********************
  GENERATING A PASSWORD
  *********************

  This function takes on parameter (passwordLength) - the length of the password that the user wishes to generate, which in turn derives from the password length id attached to the HTML dropdown. This is utilised to determine the number of loop cycles to generate the password.

  Firstly, however, the text inside the password element is cleared each time a password is generated to prevent any new passwords appending to the old one. Two iterations then ensue.

  The first loops through all character arrays and determines a random character from each, which is then printed to the DOM. This ensures that at least one number, one symbol, one uppercase and one lowercase letter is part of the password - commonly asked for in today's online forms to bolster password security.

  The second loop runs through the rest of the password. It selects first a random array of the four main character arrays, and then selects a random character inside that random array. This is then published to the DOM on each loop. Note the passwordLength - 4 in the second loop statement: we always need to take off 4 cycles because 4 characters (cycles) are already printed in the first loop - this ensures that the password remains at the length specified by the user, instead of 4 characters longer!

  To round of the main function of this app, the copy password button is made visible now that a password has been generated.
*/

const createPassword = (passwordLength) => {
  const password = document.getElementById("password");
  password.textContent = "";

  for (let i = 0; i < characters.length; i++) {
    const randomKeyChars = Math.floor(Math.random() * characters[i].length);
    password.textContent += characters[i][randomKeyChars];
  }

  for (let i = 0; i < passwordLength - 4; i++) {
    const random = Math.floor(Math.random() * characters.length);
    let randomArr = characters[random];
    const randomCharacter = Math.floor(Math.random() * randomArr.length);
    randomArr = randomArr[randomCharacter];
    password.textContent += randomArr;
  }

  copyBtn.classList.add("show-copy-btn");
};

// Ensure password length is selected in the dropdown before user can generate password

const lengthIsNull = () => {
  if (length.value === "") {
    alert("Please select a password length.");
    return false;
  }

  return true;
}

// Generate button: check length is assigned and pass as argument into createPassword function

generateBtn.addEventListener("click", () => {
  if (!lengthIsNull()) return;
  const passwordLength = document.getElementById("pw-length").value;
  createPassword(passwordLength);
})

// Allow copying of password to clipboard by passing the value into the navigator object

copyBtn.addEventListener("click", () => {
  const passwordValue = password.textContent;

  navigator.clipboard.writeText(passwordValue);
  alert("Password copied!");
})