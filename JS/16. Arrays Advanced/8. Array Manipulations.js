function manipulateArray(commands) {
    let initialArray = commands.shift().split(' ').map(Number);
  
    for (let command of commands) {
      let [action, value, index] = command.split(' ');
  
      switch (action) {
        case 'Add':
          initialArray.push(Number(value));
          break;
        case 'Remove':
          initialArray = initialArray.filter((num) => num !== Number(value));
          break;
        case 'RemoveAt':
          initialArray.splice(Number(value), 1);
          break;
        case 'Insert':
          initialArray.splice(Number(index), 0, Number(value));
          break;
      }
    }
  
    console.log(initialArray.join(' '));
  }