function solve(arr1) {
    let oldSum = 0;
    let newSum = 0;
    for (i = 0; i < arr1.length; i++) {
        let num = arr1[i];
        oldSum+=num;
        if (num % 2 == 0) {
            num += i;
        } else {
            num -= i;
        }
        newSum+=num;
        arr1[i]=num;
    }
    console.log(arr1);
    console.log(oldSum);
    console.log(newSum);
} solve([5, 15, 23, 56, 35])