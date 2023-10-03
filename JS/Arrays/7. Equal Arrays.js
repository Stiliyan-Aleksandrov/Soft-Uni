function solve(arr1, arr2) {
    let sum = 0;
    let num1 = 0;
    let num2 = 0;
    let counter = -1;

    for (let i = 0; i < arr1.length; i++) {
        num1 += Number(arr1[i]);
    }

    for (let i = 0; i < arr2.length; i++) {
        num2 += Number(arr2[i]);
        if (arr1[i] !== arr2[i]) {
            counter = i; 
            break; 
        }
    }

    if (num1 == num2) {
        sum += num1;
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        if (counter !== -1) {
            console.log(`Arrays are not identical. Found difference at ${counter} index`);
        } else {
            console.log(`Arrays are not identical. Lengths are different.`);
        }
    }
} solve(['1'], ['10'])
