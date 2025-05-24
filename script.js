const inputEl = document.getElementById("input");
const inputUnitEl = document.getElementById("input-unit");
const outputUnitEl = document.getElementById("output-unit");
const errorEl = document.getElementById("error");
const resultEl = document.getElementById("result");
const convertBtn = document.getElementById("convert");
const clearBtn = document.getElementById("clear");

function convertWeight(value, fromUnit, toUnit) {
  // Convert input value to kilograms as base unit
  let valueInKg;
  switch (fromUnit) {
    case "kg":
      valueInKg = value;
      break;
    case "lb":
      valueInKg = value / 2.20462;
      break;
    case "g":
      valueInKg = value / 1000;
      break;
    case "oz":
      valueInKg = value / 35.274;
      break;
    default:
      valueInKg = value;
  }

  // Convert from kilograms to target unit
  let convertedValue;
  switch (toUnit) {
    case "kg":
      convertedValue = valueInKg;
      break;
    case "lb":
      convertedValue = valueInKg * 2.20462;
      break;
    case "g":
      convertedValue = valueInKg * 1000;
      break;
    case "oz":
      convertedValue = valueInKg * 35.274;
      break;
    default:
      convertedValue = valueInKg;
  }

  return convertedValue;
}

function showError(message) {
  errorEl.innerText = message;
  setTimeout(() => {
    errorEl.innerText = "";
  }, 3000);
}

function clearAll() {
  inputEl.value = "";
  resultEl.innerText = "";
  errorEl.innerText = "";
}

convertBtn.addEventListener("click", () => {
  const inputValue = parseFloat(inputEl.value);
  const fromUnit = inputUnitEl.value;
  const toUnit = outputUnitEl.value;

  if (isNaN(inputValue) || inputValue <= 0) {
    showError("Please enter a valid positive number!");
    resultEl.innerText = "";
    return;
  }

  if (fromUnit === toUnit) {
    resultEl.innerText = inputValue.toFixed(2);
    return;
  }

  const converted = convertWeight(inputValue, fromUnit, toUnit);
  resultEl.innerText = converted.toFixed(2);
});

clearBtn.addEventListener("click", () => {
  clearAll();
});
