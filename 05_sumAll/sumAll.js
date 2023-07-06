const sumAll = function (firstNumber, secondNumber) {
  if (firstNumber < 0 || secondNumber < 0) {
    return 'ERROR';
  }

  // check types (lol TypeScript)
  if (typeof secondNumber != 'number' || typeof firstNumber != 'number') {
    return 'ERROR';
  }

  // declare sum, which will hold the sum as it is added up
  let sum = 0;
  let smallerNumber = 0;
  let biggerNumber = 0;

  // figure out biggerNumber for the loop
  if (secondNumber > firstNumber) {
    biggerNumber = secondNumber;
    smallerNumber = firstNumber;
  } else {
    biggerNumber = firstNumber;
    smallerNumber = secondNumber;
  }

  // add 'em up
  for (
    let currentNumber = biggerNumber;
    currentNumber >= smallerNumber;
    currentNumber--
  ) {
    sum += currentNumber;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
