/**
 * Global scope (convertFahrenheitToCelsius, tempOne, tempTwo)
 *     Local scope (fahrenheit, celsius)
 *         Local scope (isFresszing)
 */

let convertFahrenheitToCelsius = fahrenheit => {
  let celsius = (fahrenheit - 32) * 5 / 9;

  if (celsius <= 0) {
    let isFresszing = true;
  }

  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne, tempTwo);
