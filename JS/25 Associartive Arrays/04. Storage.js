function solveStorage(input) {
    let storage = new Map();
  
    for (let data of input) {
      let [item, quantity] = data.split(' ');
      quantity = Number(quantity);
  
      if (!storage.has(item)) {
        storage.set(item, quantity);
      } else {
        storage.set(item, storage.get(item) + quantity);
      }
    }
  
    for (let [item, quantity] of storage) {
      console.log(`${item} -> ${quantity}`);
    }
  }