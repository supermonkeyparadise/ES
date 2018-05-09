// Function - input, code, output

let greetUser = () => {
  console.log('Welcome user!');
};

greetUser();
greetUser();
greetUser();

let square = num => {
  return num * num;
};

console.log(square(3));

let convertFahrenheitToCelsius = fahrenheit => {
  let celsius = (fahrenheit - 32) * 5 / 9;
  return celsius;
};

let tempOne = convertFahrenheitToCelsius(32);
let tempTwo = convertFahrenheitToCelsius(68);

console.log(tempOne, tempTwo);
