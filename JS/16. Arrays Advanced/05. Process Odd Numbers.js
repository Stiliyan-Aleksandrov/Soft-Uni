function processOddNumbers(inputArray) {
    const result = [];
  
    for (let i = 1; i < inputArray.length; i += 2) {
      result.push(inputArray[i] * 2);
    }
  
    result.reverse();
  
    console.log(result.join(' '));
  }