const rangeElement = document.getElementById("range");

const printValue = (event) => {
  console.log(event.target.value);
};
rangeElement.addEventListener("input", printValue);
