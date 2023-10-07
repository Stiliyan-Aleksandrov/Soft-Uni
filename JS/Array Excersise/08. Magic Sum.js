function findPairsWithSum(arr, targetSum) {
    const pairs = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === targetSum) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }


    for (let k = 0; k < pairs.length; k++) {
        console.log(`${pairs[k][0]} ${pairs[k][1]}`);
    }
}