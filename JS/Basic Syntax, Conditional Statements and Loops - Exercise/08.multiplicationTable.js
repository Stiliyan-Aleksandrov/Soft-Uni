function solve(num) {
    let output = 0;
    for (i = 1; i <= 10; i++) {
        output = i*num;
        console.log(`${num} X ${i} = ${output}`);
    }
}
solve(5)