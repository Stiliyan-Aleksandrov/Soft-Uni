function generateLatinTriples(n) {
    n = parseInt(n);
  
    // Check if n is a valid number
    if (isNaN(n) || n <= 0 || n > 26) {
      console.log("Invalid input. Please enter a valid positive number between 1 and 26.");
      return;
    }
  
    // Convert ASCII values to Latin letters
    const startCharCode = 'a'.charCodeAt(0);
    const endCharCode = startCharCode + n - 1;
  
    // Generate and print triples
    for (let i = startCharCode; i <= endCharCode; i++) {
      for (let j = startCharCode; j <= endCharCode; j++) {
        for (let k = startCharCode; k <= endCharCode; k++) {
          const triple = String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k);
          console.log(triple);
        }
      }
    }
  }