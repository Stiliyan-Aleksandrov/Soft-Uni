function solvePhoneBook(input) {
    let phoneBook = new Map();
  
    for (let data of input) {
      let [name, number] = data.split(' ');
      phoneBook.set(name, number);
    }
  
    for (let [name, number] of phoneBook) {
      console.log(`${name} -> ${number}`);
    }
  }