function solveWordOccurrences(input) {
    let wordCount = new Map();
  
    for (let word of input) {
      if (!wordCount.has(word)) {
        wordCount.set(word, 1);
      } else {
        wordCount.set(word, wordCount.get(word) + 1);
      }
    }
  
    Array.from(wordCount.keys()).sort((a, b) => wordCount.get(b) - wordCount.get(a)).forEach(word => {
      console.log(`${word} -> ${wordCount.get(word)} times`);
    });
  }