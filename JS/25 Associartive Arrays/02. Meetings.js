function solveMeetings(input) {
    let schedule = new Map();
  
    for (let data of input) {
      let [day, person] = data.split(' ');
      if (!schedule.has(day)) {
        schedule.set(day, person);
        console.log(`Scheduled for ${day}`);
      } else {
        console.log(`Conflict on ${day}!`);
      }
    }
  
    for (let [day, person] of schedule) {
      console.log(`${day} -> ${person}`);
    }
  }