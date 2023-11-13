function solveSchoolGrades(input) {
    let grades = new Map();
  
    for (let data of input) {
      let [name, ...studentGrades] = data.split(' ');
      studentGrades = studentGrades.map(Number);
  
      if (!grades.has(name)) {
        grades.set(name, studentGrades);
      } else {
        grades.set(name, grades.get(name).concat(studentGrades));
      }
    }
  
    Array.from(grades.keys()).sort().forEach(name => {
      let average = (grades.get(name).reduce((a, b) => a + b, 0) / grades.get(name).length).toFixed(2);
      console.log(`${name}: ${average}`);
    });
  }