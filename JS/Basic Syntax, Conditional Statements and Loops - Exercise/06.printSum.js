function solve(num1, num2) {
    sum = 0;
    counter =``;
    for (i = num1; i <= num2; i++) {
        sum += i;
        counter += ` ${i}`;
    }
    console.log(`${counter} `)
    console.log(`Sum: ${sum}`);
} solve(0, 26)