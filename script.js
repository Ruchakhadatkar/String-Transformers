const input = document.querySelector("input");

const lowerCaseOputput = document.querySelector("#lowercase span");
const upperCaseOputput = document.querySelector("#uppercase span");
const camelCaseOutput = document.querySelector("#camelcase span");
const pascalCaseOutput = document.querySelector("#pascalcase span");
const snakeCaseOutput = document.querySelector("#snakecase span");
const kebabCaseOutput = document.querySelector("#kebabcase span");
const trimOutput = document.querySelector("#trim span");



function capitalizeString(str) {
  return str[0].toUpperCase() + str.slice(1, str.length);
}

function camelCase(str) {
  const lowerCaseString = str.toLowerCase();
  const wordArray = lowerCaseString.split(" ");
  const finalArray = wordArray.map((word, i) => {
    if (i === 0) return word;
    return capitalizeString(word);
  });
  return finalArray.join("");
}

function pascalCase(str) {
    const lowerCaseString = str.toLowerCase();
    const wordArray = lowerCaseString.split(" ");
    const finalArray = wordArray.map((word, i) => {
      return capitalizeString(word);
    });
    return finalArray.join("");
  }

  function snakeCase(str) {
    const wordArray = str.split(" ");
    
    return wordArray.join("_");
  }

function updateScreen() {
  lowerCaseOputput.innerText = input.value.toLowerCase();
  upperCaseOputput.innerText = input.value.toUpperCase();
  camelCaseOutput.innerText = camelCase(input.value);
  pascalCaseOutput.innerText = pascalCase(input.value)
  snakeCaseOutput.innerText = snakeCase(input.value)

}

updateScreen();

input.addEventListener("input", () => {
  updateScreen();
});
