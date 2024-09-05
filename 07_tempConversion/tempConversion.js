const convertToCelsius = function(num) {
let Fahrenheit = 32;
let answer = num * Fahrenheit;
return answer;
};

console.log(convertToCelsius(4));

const convertToFahrenheit = function(num) {
  let Celsius = -32;
let answer = num + Celsius;
return answer;
};

console.log(convertToFahrenheit(64));


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
