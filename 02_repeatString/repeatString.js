const repeatString = function (string, num) {
  if (!(num >= 0)) {
    return 'ERROR';
  }

  let repeatedString = '';

  for (let index = 0; index < num; index++) {
    repeatedString += string;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
