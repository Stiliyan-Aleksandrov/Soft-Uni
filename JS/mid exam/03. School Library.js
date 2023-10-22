function onlineBookLibrary(input) {
    let shelf = input[0].split('&');
  
    function addBook(bookName) {
      if (!shelf.includes(bookName)) {
        shelf.unshift(bookName);
      }
    }
  
    function takeBook(bookName) {
      bookName = bookName.trim();
      const index = shelf.indexOf(bookName);
      if (index !== -1) {
        shelf.splice(index, 1);
      }
    }
  
    function swapBooks(book1, book2) {
      const index1 = shelf.indexOf(book1);
      const index2 = shelf.indexOf(book2);
      if (index1 !== -1 && index2 !== -1) {
        [shelf[index1], shelf[index2]] = [shelf[index2], shelf[index1]];
      }
    }
  
    function checkBook(index) {
      if (index >= 0 && index < shelf.length) {
        console.log(shelf[index]);
      }
    }
  
    for (let i = 1; i < input.length; i++) {
      if (input[i] === 'Done') {
        break;
      }
      let [command, value1, value2] = input[i].split(' | ');
  
      switch (command) {
        case 'Add Book':
          addBook(value1);
          break;
        case 'Take Book':
          takeBook(value1);
          break;
        case 'Swap Books':
          swapBooks(value1, value2);
          break;
        case 'Insert Book':
          const bookNameToInsert = value1.trim(); 
          if (!shelf.includes(bookNameToInsert)) {
            shelf.push(bookNameToInsert);
          }
          break;
        case 'Check Book':
          checkBook(Number(value1));
          break;
        default:
          break;
      }
    }
  
    console.log(shelf.join(', '));
  } onlineBookLibrary([ "Don Quixote&The Great Gatsby&Moby Dick",
  "Add Book | Ulysses",
  "Take Book | Don Quixote",
  "Insert Book | Alice's Adventures in Wonderland",
  "Done",])