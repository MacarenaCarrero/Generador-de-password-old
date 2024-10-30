
const rangeElement = document.getElementById("range");
const passwordElement = document.getElementById("password");
const lengthPassElement = document.getElementById("lengthPass")
const passwordContent =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/</>";
  const buttonPasswordElement = document.getElementById("buttonPassword")


const lengthPass= (event) => {
console.log(event.target.value);
lengthPassElement.textContent ="Length : " + event.target.value
}

const password = () => {
  let newPassword =""
  for (let i =0 ; i  < lengthPass; i++){
    const randomNumber = Math.floor(Math.random()*passwordContent.length)
    const randomCharacter = passwordContent.charAt(randomNumber)
    newPassword += randomCharacter
  }
}


rangeElement.addEventListener("input",lengthPass);
buttonPasswordElement.addEventListener("click",password);
