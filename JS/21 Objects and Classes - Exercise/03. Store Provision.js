function updateStoreStock(currentStock, delivery) {
    const stock = {};
  
    for (let i = 0; i < currentStock.length; i += 2) {
      const productName = currentStock[i];
      const quantity = Number(currentStock[i + 1]);
      stock[productName] = quantity;
    }
  
    for (let i = 0; i < delivery.length; i += 2) {
      const productName = delivery[i];
      const quantity = Number(delivery[i + 1]);
  
      if (stock.hasOwnProperty(productName)) {
        stock[productName] += quantity;
      } else {
        stock[productName] = quantity;
      }
    }
  
    for (const [product, quantity] of Object.entries(stock)) {
      console.log(`${product} -> ${quantity}`);
    }
  }