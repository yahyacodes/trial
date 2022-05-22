// first Section (Weight Convertion)
const select = document.querySelector(".weight");
const result = document.querySelector(".weight-converter");
const field = document.getElementById("field");
const ans = document.getElementById("ans");
const btn = document.querySelector(".btn");

//Event handler
btn.addEventListener("click", function () {
  const input = select.value;
  const output = result.value;

  //Calculation
  let answer = 0;
  if (input === "grams" && output === "grams") {
    ans.value = Number(field.value);
  } else if (input === "grams" && output === "kilograms") {
    ans.value = Number(field.value) / 1000;
  } else if (input === "kilograms" && output === "kilograms") {
    ans.value = Number(field.value);
  } else if (input === "kilograms" && output === "grams") {
    ans.value = Number(field.value) * 1000;
  }
  answer = field.value;
});

//Second Section (Litres conversion)
const dropdown = document.querySelector(".litre");
const litres = document.querySelector(".litre-to");
const inputField = document.getElementById("litres-from");
const ansField = document.getElementById("litres-to");
const button = document.querySelector(".convert");

//even handlers
button.addEventListener("click", function () {
  const convertTo = dropdown.value;
  const convertFrom = litres.value;

  //Calculation
  let converted = 0;
  if (convertTo === "liters" && convertFrom === "liters") {
    ansField.value = Number(inputField.value);
  } else if (convertTo === "liters" && convertFrom === "mililiters") {
    ansField.value = Number(inputField.value) * 1000;
  } else if (convertTo === "mililiters" && convertFrom === "mililiters") {
    ansField.value = Number(inputField.value);
  } else if (convertTo === "mililiters" && convertFrom === "liters") {
    ansField.value = Number(inputField.value) / 1000;
  }
  converted = inputField.value;
});
