function calculator(input1, input2, input3) {
    const negativeCount = [input1, input2, input3].filter(num => num < 0).length;
  
    if (negativeCount % 2 === 0) {
      return "Positive";
    } else {
      return "Negative";
    }
  }