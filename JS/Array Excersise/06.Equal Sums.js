function findEqualSumsIndex(arr) {
    let leftSum = 0;
    let rightSum = arr.reduce((acc, curr) => acc + curr, 0); 

    for (let i = 0; i < arr.length; i++) {
        rightSum -= arr[i]; 

        if (leftSum === rightSum) {
            console.log(i); 
            return;
        }

        leftSum += arr[i]; 
    }

    console.log("no"); 
}