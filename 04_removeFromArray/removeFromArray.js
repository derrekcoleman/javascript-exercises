const removeFromArray = function (originalArray, ...itemsToRemoveArray) {
  const trimmedArray = [];

  for (let i = 0; i < originalArray.length; i++) {
    if (originalArray[i] !== itemsToRemoveArray[0]) {
      if (originalArray[i] !== itemsToRemoveArray[1]) {
        if (originalArray[i] !== itemsToRemoveArray[2]) {
          if (originalArray[i] !== itemsToRemoveArray[3]) {
            trimmedArray.push(originalArray[i]);
          }
        }
      }
    }
  }

  return trimmedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
