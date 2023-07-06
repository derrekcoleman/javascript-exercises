const convertToCelsius = function (tempInFahrenheit) {
  let tempInCelcius = (tempInFahrenheit - 32) * (5 / 9);
  let roundedTempInCelcius = tempInCelcius.toFixed(1);
  return roundedTempInCelcius;
};

const convertToFahrenheit = function (tempInCelcius) {
  let tempInFahrenheit = tempInCelcius * (9 / 5) + 32;
  let roundedTempInFahrenheit = tempInFahrenheit.toFixed(1);
  return roundedTempInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
