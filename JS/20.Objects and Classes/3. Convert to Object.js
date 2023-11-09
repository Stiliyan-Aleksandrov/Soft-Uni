function convertAndPrint(jsonString) {
    try {
      const jsonObject = JSON.parse(jsonString);
      for (let key in jsonObject) {
        console.log(`${key}: ${jsonObject[key]}`);
      }
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  }