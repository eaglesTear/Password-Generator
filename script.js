/* 
UI:
Title
Short description
select amount of letters - input dropdown, min 6 max 12
generate password btn - click as many times as they want
display pw to user in dom each time btn clicked
1. Array of possible letters / symbols - 4 SETS: UC, LC, NUMS, SYMS
3. first, take the value from input dropdown.
4. value is inserted as argument in iteration func - amount of times to iterate and generate text
5. func passes text generated to the dom
6. safety buffers - ie, if more than 2 of the same letter find another
*/

const characters = ["~", "'", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "<", ",", ">", ".", "?", "/", "a", "b" , "c", "d" , "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

const passwordArea = document.getElementById("password")
const length = document.getElementById("length")
const generate = document.getElementById("generate")

const createPassword = (iterationCount) => {
   for (let i = 0; i < iterationCount; i++) {
        const randomChar = Math.floor(Math.random() * characters.length)
     const text = passwordArea.textContent += characters[randomChar]
     //randomise(passwordArea)
   }
}

generate.addEventListener("click", () => {
    const number = length.value
    createPassword(number)
})
