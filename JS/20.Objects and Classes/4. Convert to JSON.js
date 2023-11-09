function convertAndPrintToJson(firstName, lastName, hairColor) {
    const personObject = {
      name: firstName,
      lastName: lastName,
      hairColor: hairColor
    };
  
    const jsonString = JSON.stringify(personObject);
  
    console.log(jsonString);
  }