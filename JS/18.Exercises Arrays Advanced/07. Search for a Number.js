function searchForNumber(arr1, arr2) {
    const elementsToTake = arr1.slice(0, arr2[0]);
  
    elementsToTake.splice(0, arr2[1]);
  
    const numberToSearch = arr2[2];
    const count = elementsToTake.filter(num => num === numberToSearch).length;
  
    console.log(`Number ${numberToSearch} occurs ${count} times.`);
  }