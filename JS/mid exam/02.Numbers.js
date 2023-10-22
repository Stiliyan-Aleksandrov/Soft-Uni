function manipulateArray(commands) {
    let numbers = commands[0].split(' ').map(Number);
  
    for (let i = 1; i < commands.length; i++) {
      let [action, value, replacement] = commands[i].split(' ');
  
      switch (action) {
        case 'Add':
          numbers.push(Number(value));
          break;
        case 'Remove':
          numbers = numbers.filter((num) => num !== Number(value));
          break;
        case 'Replace':
          let replaced = false;
          numbers = numbers.map((num) => {
            if (!replaced && num === Number(value)) {
              replaced = true;
              return Number(replacement);
            }
            return num;
          });
          break;
        case 'Collapse':
          numbers = numbers.filter((num) => num >= Number(value));
          break;
        case 'Finish':
          console.log(numbers.join(' '));
          break;
        default:
          break;
      }
    }
  }