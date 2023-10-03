function condenseArray(nums) {
    while (nums.length > 1) {
        const condensed = [];
        for (let i = 0; i < nums.length - 1; i++) {
            condensed.push(nums[i] + nums[i + 1]);
        }
        nums = condensed;
    }

    if (nums.length === 1) {
        console.log(nums[0]);
    } else {
        console.log("Already condensed");
    }
}condenseArray([1])