function findTwoSmallestNumbers(inputArray) {
    inputArray.sort((a, b) => a - b);
  
    const smallestTwo = inputArray.slice(0, 2);

    console.log(smallestTwo.join(' '));
  }