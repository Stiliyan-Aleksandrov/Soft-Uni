function solveAddressBook(input) {
    let addressBook = new Map();
  
    for (let data of input) {
      let [name, address] = data.split(':');
      addressBook.set(name, address);
    }
  
    Array.from(addressBook.keys()).sort().forEach(name => {
      console.log(`${name} -> ${addressBook.get(name)}`);
    });
  }