function solve(arr) {
    let sumOfEven = 0;
    let sumOfOdd = 0;
    let difference=0
    for (let index of arr) {
        let num = index;
        if (num % 2 == 0) {
            sumOfEven += num;
        } else {
            sumOfOdd += num;
        }
        difference=sumOfEven-sumOfOdd;
    }
console.log(difference);
} solve ([2,4,6,8,10])