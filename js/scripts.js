const rangeElement = document.getElementById("range");

const printValue = (event) => {
  console.log(event.target.value);
};

const passwordElement = document.getElementById("password");
const passworsContent =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567890!@#$%^&*()_+-={}[]:;<>,.?/</>";

const randomPassword = (num) => {};

rangeElement.addEventListener("input", printValue);
