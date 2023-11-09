function createDictionary(termsAndDefinitions) {
    const dictionary = {};
  
    for (const termAndDefinition of termsAndDefinitions) {
      const obj = JSON.parse(termAndDefinition);
      const [term, definition] = Object.entries(obj)[0];
      dictionary[term] = definition;
    }
  
    Object.entries(dictionary)
      .sort((a, b) => a[0].localeCompare(b[0]))
      .forEach(([term, definition]) => {
        console.log(`Term: ${term} => Definition: ${definition}`);
      });
  }