function isSpecialNumber(number) {
  let sumOfDigits = 0;
  let num = number;

  while (num > 0) {
    sumOfDigits += num % 10;
    num = Math.floor(num / 10); 
  }

  return sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
}

function printSpecialNumbersInRange(n) {
  for (let i = 1; i <= n; i++) {
    const isSpecial = isSpecialNumber(i);
    console.log(`${i} -> ${isSpecial}`);
  }
}

// Example usage:
printSpecialNumbersInRange(20); 