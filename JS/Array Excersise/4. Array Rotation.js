function solve(arr1, rotations) {
    for (let rotation = 1; rotation <= rotations; rotation++) {
        let firstEl = arr1.shift();
        arr1.push(firstEl);
    }
    console.log(arr1.join(` `));
} solve([51, 47, 32, 61, 21], 2)