function printSpecialNumbersInRange(n) {
  function isSpecialNumber(number) {
    let sumOfDigits = 0;
    let num = number;

    while (num > 0) {
      sumOfDigits += num % 10;
      num = parseInt(num / 10); // Use parseInt to ensure integer division
    }

    return sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
  }

  for (let i = 1; i <= n; i++) {
    const isSpecial = isSpecialNumber(i);
    console.log(`${i} -> ${isSpecial}`);
  }
} printSpecialNumbersInRange(20); 