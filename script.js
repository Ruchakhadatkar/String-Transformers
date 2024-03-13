const input = document.querySelector("input");

const lowerCaseOputput = document.querySelector("#lowercase span");
const upperCaseOputput = document.querySelector("#uppercase span");

lowerCaseOputput.innerText = input.value.toLowerCase();
upperCaseOputput.innerText = input.value.toUpperCase();

input.addEventListener("input", () => {
  lowerCaseOputput.innerText = input.value.toLowerCase();
  upperCaseOputput.innerText = input.value.toUpperCase();
});
