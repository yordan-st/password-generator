const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// create reassignable variables for the passwords
let passwords = () => createPasswords()
let maxCharacters = 15

// pick a random character
function pickRandomCharacter(arr) {
    return arr[Math.floor(Math.random() * characters.length)]
}

function createPassword() {
    let newPassword = ''
    for(let i=0; i <= maxCharacters; i++) {
        newPassword += pickRandomCharacter(characters)
    } return newPassword
}

function createPasswords() {
    let newPasswords = []
    for (let i=0; i<=1; i++) {
        let password = createPassword()
        newPasswords.push(password)
    } 
    passwords = newPasswords
    document.getElementById('password-one').textContent = passwords[0]
    document.getElementById('password-two').textContent = passwords[1]
}

document.getElementById("btn-generate").addEventListener("click", createPasswords);
